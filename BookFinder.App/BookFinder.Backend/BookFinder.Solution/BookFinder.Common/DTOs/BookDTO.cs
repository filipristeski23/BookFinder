using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookFinder.Common.DTOs
{
    public class BookDTO
    {
        public int id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public string? genre { get; set; }
        public double? rating { get; set; }
    }
}
