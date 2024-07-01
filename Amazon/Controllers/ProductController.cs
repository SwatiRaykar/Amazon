using Amazon.Repository;
using AmazonDAL1.Interface;
using AmazonDAL1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace Amazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowSpecificOrigin")]
    public class ProductController : ControllerBase
    {
        
        private readonly IProductRepository _product;

        public ProductController(IProductRepository product)
        {
            _product = product;
        }

        
        [HttpGet("GetAllProducts")]
        public ActionResult<IEnumerable<Products>>GetAllProducts()
        {
            var products = _product.GetAllProducts();
            return Ok(products);
        }

        [HttpPost("AddToCart")]
        public IActionResult AddToCart([FromBody] Cart cartItem)
        {
            _product.AddToCart(cartItem.ProductId, cartItem.quantity);
            return Ok();
        }
        [HttpGet("GetCartItems")]
        public ActionResult<IEnumerable<Cart>>GetCartItems()
        {
            var cartItems = _product.GetCartItems();
            return Ok(cartItems);
        }
        [HttpDelete("remove/{ProductId}")]
        public IActionResult RemoveProductFromCart(int ProductId)
        {
            _product.RemoveProductFromCart(ProductId);
            //return NoContent();
            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("addProduct")]
        public IActionResult AddProduct([FromBody] Products product)

        {
            var apiResponse = new APIResponse();
            var newProduct = _product.AddProduct(product);
            if (newProduct != 0)
            {
                apiResponse.Success = true;
                apiResponse.Data = "Successfully added";
                

            }
            else
            {
                apiResponse.Success = false;
                apiResponse.ErrorMessage = "Failed to add product with provided input";
            }

            return Ok(apiResponse);
        }

        [HttpGet("GetAllOrders")]
        public ActionResult<IEnumerable<Orders>> GetAllOrders()
        {
            var orders = _product.GetAllOrders();
            return Ok(orders);
        }
    }
}
