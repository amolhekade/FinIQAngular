using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;

namespace FinIQ.Angular.DocGen.Helper
{
    internal class Helper
    {
        internal ByteArrayContent GetHttpContent(object req)
        {
            try
            {            
                var reqContent = new ByteArrayContent(UnicodeEncoding.UTF8.GetBytes(JsonConvert.SerializeObject(req)));
                reqContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("Application/json");
                return reqContent;
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }
    }
}