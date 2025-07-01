using BookFinder.ApplicationLogic.ServiceImplementations;
using BookFinder.Common.DTOs;
using CsvHelper;
using CsvHelper.Configuration;
using System.Formats.Asn1;
using System.Globalization;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;


namespace Services.Services;

public class BookService : IBookService
{
    private readonly IWebHostEnvironment _env;

    public BookService(IWebHostEnvironment env)
    {
        _env = env;
    }

    public async Task<List<BookDTO>> GetMergedBooks()
    {
        var dataDirectory = Path.Combine(_env.WebRootPath, "data");

        var jsonFilePath = Path.Combine(dataDirectory, "booksjson.json");
        var csvFilePath = Path.Combine(dataDirectory, "bookscsv.csv");

        var jsonBooks = await ReadJsonBooksAsync(jsonFilePath);
        var csvBooks = ReadCsvBooks(csvFilePath);

        var mergedBooks = from json in jsonBooks
                          join csv in csvBooks on json.id equals csv.id into joined
                          from csv in joined.DefaultIfEmpty()

                          select new BookDTO
                          {
                              id = json.id,
                              title = json.title,
                              author = json.author,
                              genre = json.genre,
                              rating = csv?.rating
                          };

        return mergedBooks.OrderBy(b => b.author).ToList();
    }

    private async Task<List<BookDTO>> ReadJsonBooksAsync(string path)
    {
        var jsonContent = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<List<BookDTO>>(jsonContent)!;
    }

    private List<BookModel> ReadCsvBooks(string path)
    {
        using var reader = new StreamReader(path);
        using var csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture));
        return csv.GetRecords<BookModel>().ToList();
    }

}
