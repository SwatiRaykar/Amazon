using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int marketPrice { get; set; }
        public string imageURL { get; set; }
        public int NOofRatings { get; set; }
        public int TotalBuyCustomers { get; set; }
    }
}
