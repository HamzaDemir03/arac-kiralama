using System;

namespace AracKiralama.Domain.Entities
{
    public class Car
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        public string PlateNumber { get; set; }
        public decimal DailyPrice { get; set; }
        public string Transmission { get; set; } // Manual, Automatic
        public string FuelType { get; set; } // Gasoline, Diesel, Electric
        public bool IsAvailable { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastModifiedAt { get; set; }
    }
} 