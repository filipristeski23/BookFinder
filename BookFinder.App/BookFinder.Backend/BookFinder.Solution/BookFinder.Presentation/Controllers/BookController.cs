using Microsoft.AspNetCore.Mvc;
using BookFinder.ApplicationLogic.ServiceImplementations;

namespace BookFinder.Presentation.Controllers
{
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet("merged")]
        public async Task<IActionResult> GetMergedBooks()
        {
            var books = await _bookService.GetMergedBooks();
            return Ok(books);
        }
    }
}
