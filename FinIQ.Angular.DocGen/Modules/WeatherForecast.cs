using System;

namespace FinIQ.Angular.DocGen.Modules
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }

    public class SaveMobiles
    {  
        public string id { get; set; }

        public string name { get; set; }
    }


}
