using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO = WebApiApp.Models.DTO;

namespace WebApiApp.BL
{
	/// <summary>
	/// Генератор случайных моделей данных.
	/// </summary>
	public class GeneratorModels
	{
		/// <summary>
		/// Сгенерировать модели.
		/// </summary>
		/// <param name="Count"></param>
		/// <returns></returns>
		public DTO.GroupModel[] Generate(int Count)
		{
			List<DTO.GroupModel> _List = new List<DTO.GroupModel>();

			for (int i = 0; i < Count; i++)
			{
				_List.Add(new DTO.GroupModel() { Id = i, Name = $@"Group{i + 1}" });
			}

			return _List.ToArray();
		}
	}
}
