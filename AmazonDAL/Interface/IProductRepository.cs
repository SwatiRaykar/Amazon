using AmazonDAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL.Interface
{
    public interface IProductRepository
    {
        IEnumerable<Products> GetAllProducts();
    }
}
