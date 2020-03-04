using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FinIQ.Angular.DocGen.Modules;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;



namespace FinIQ.Angular.DocGen.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        Helper.Helper _helper;
        HttpClient _httpClient;
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            _helper = new Helper.Helper();
            _httpClient = new HttpClient();
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();        
        }

        [HttpPost]
        public async Task<object> SaveMobileData ([FromBody] SaveMobiles req)
        {
            try
            {
                var reqContent = _helper.GetHttpContent(req);
                var response = await _httpClient.PostAsync("http://localhost:82/FinIQService/AngularAPI.svc/SaveDCMobiles", reqContent);
                // DCGetPairInfo_Result result = Newtonsoft.Json.JsonConvert.DeserializeObject<DCGetPairInfo_Result>(response.Content.ReadAsStringAsync().Result);
                return response.Content.ReadAsStringAsync().Result;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                // _logger.WriteLogToFile("Error", ex.InnerException.ToString(), true);
                return null ;
            }            
        }
    }
}
