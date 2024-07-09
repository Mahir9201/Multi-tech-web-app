namespace DotNetCoreApp.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public Task()
        {
            // Initialize properties with default values if necessary
            Name = string.Empty;
        }

        public Task(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
