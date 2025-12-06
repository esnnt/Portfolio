// Sorunlu 'si' paketini tamamen kaldırdık. Sadece 'fa' ve 'bs' kullanıyoruz.
import { FaUnity, FaGithub, FaCode, FaMobileAlt, FaVrCardboard, FaGamepad, FaCube, FaLayerGroup } from "react-icons/fa";
import { BsGpuCard, BsFiletypeCs } from "react-icons/bs";

export const skillCategories = [
  {
    title: "Core Engine",
    description: "Ana oyun motoru yetkinlikleri",
    skills: [
      { name: "Unity 3D/2D", icon: FaUnity, level: "Advanced", color: "#fff" },
      { name: "C# Scripting", icon: BsFiletypeCs, level: "Advanced", color: "#9b4f96" }, 
      { name: "Physics & Collision", icon: FaCode, level: "Beginner", color: "#4caf50" }, // Giriş Seviyesi
      { name: "Input System", icon: FaGamepad, level: "Advanced", color: "#ff9800" },
    ]
  },
  {
    title: "Graphics & Render",
    description: "Görsel kalite ve optimizasyon",
    skills: [
      { name: "URP / HDRP", icon: BsGpuCard, level: "Beginner", color: "#2196f3" }, // Giriş Seviyesi
      { name: "Shader Graph", icon: FaLayerGroup, level: "Intermediate", color: "#00bcd4" }, 
      { name: "Particle System", icon: FaVrCardboard, level: "Intermediate", color: "#e91e63" },
      { name: "Lighting & Baking", icon: FaCube, level: "Beginner", color: "#ff5722" }, // Giriş Seviyesi
    ]
  },
  {
    title: "Architecture & Tools",
    description: "Kod mimarisi ve yan araçlar",
    skills: [
      { name: "Git & Version Control", icon: FaGithub, level: "Advanced", color: "#ffffff" },
      { name: "Mobile Optimization", icon: FaMobileAlt, level: "Beginner", color: "#8bc34a" },
    ]
  }
];