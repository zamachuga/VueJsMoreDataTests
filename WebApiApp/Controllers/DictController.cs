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
		public DTO.GroupModel[] GetGroups(DTO.RequestGroupModel RequestModel)
		{
			DTO.GroupModel[] _Model = m_Generator.Generate(RequestModel.CountGroupsResult);

			return _Model;
		}
	}
}
