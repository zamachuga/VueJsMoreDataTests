using Microsoft.AspNetCore.Mvc;
using WebApiApp.BL;
using DTO = WebApiApp.Models.DTO;

namespace WebApiApp
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class DictController : ControllerBase
	{
		public DictController(GeneratorModels GeneratorModels)
		{
			m_Generator = GeneratorModels;
		}



		private GeneratorModels m_Generator;



		[HttpPost]
		public DTO.GroupModel[] GetGroups(int CountGroupsResult = 1)
		{
			DTO.GroupModel[] _Model = m_Generator.Generate(CountGroupsResult);

			/// Access-Control-Allow-Origin "*"
			///	Access-Control-Allow-Headers "origin, x-requested-with, content-type"
			/// Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"
			/// 
			HttpContext.Response.Headers.Add("Access-Control-Allow-Origin","*");
			HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "origin, x-requested-with, content-type");
			HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

			return _Model;
		}
	}
}
