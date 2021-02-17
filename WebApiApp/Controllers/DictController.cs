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



		[HttpGet]
		public DTO.GroupModel[] GetGroups(int CountGroupsResult = 1)
		{
			DTO.GroupModel[] _Model = m_Generator.Generate(CountGroupsResult);

			return _Model;
		}
	}
}
