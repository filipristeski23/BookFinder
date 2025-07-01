using BookFinder.Common.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookFinder.ApplicationLogic.ServiceImplementations
{
    public interface IBookService
    {
        Task<List<BookDTO>> GetMergedBooks();
    }
}
