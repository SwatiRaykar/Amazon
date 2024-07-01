using AmazonDAL1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazonDAL1.Interface
{
    public interface IProductRepository
    {
   
        IEnumerable<Products> GetAllProducts();
        IEnumerable<Orders> GetAllOrders();
        void AddToCart(int ProductId, int quantity);
        IEnumerable<ProductCart> GetCartItems();
        void RemoveProductFromCart(int ProductId);

        int AddProduct(Products product);

        //Task<CartResult> GetCartItemsAsync();
    }

    public interface ICustomerRepository
    {


        int RegisterCustomer(Customer customer);

        userLogedIn CustomerLogin(LoginRequest login);

        IEnumerable<Customer> GetAllCustomers();
    }
}
