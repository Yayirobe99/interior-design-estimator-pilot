
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Palette, 
  Type, 
  Layout, 
  FileCode, 
  Download, 
  Component, 
  Monitor, 
  Sun, 
  Moon, 
  MessageCircle, 
  History, 
  User, 
  Book, 
  Accessibility
} from "lucide-react";

const DesignSpec = () => {
  const [activeColor, setActiveColor] = useState("#0EA5E9");
  const [colorFormat, setColorFormat] = useState("hex");
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [spacing, setSpacing] = useState(16);
  const [darkMode, setDarkMode] = useState(false);
  const [device, setDevice] = useState("desktop");

  const colorFormats = {
    hex: activeColor,
    rgb: hexToRgb(activeColor),
    hsl: hexToHsl(activeColor)
  };
  
  const generateButtonStyles = () => {
    return {
      backgroundColor: activeColor,
      fontSize: `${fontSize}px`,
      lineHeight: lineHeight,
      letterSpacing: `${letterSpacing}px`,
      padding: `${spacing / 2}px ${spacing}px`,
    };
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Herramientas de Especificación de Diseño</h1>
          <p className="text-gray-600">Crea, exporta y colabora en especificaciones de diseño para tus proyectos</p>
        </div>

        <Tabs defaultValue="style-guide" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="style-guide" className="flex items-center gap-2">
              <Palette className="h-4 w-4" /> Guía de Estilo
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Exportación
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" /> Previsualización
            </TabsTrigger>
            <TabsTrigger value="documentation" className="flex items-center gap-2">
              <Book className="h-4 w-4" /> Documentación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="style-guide" className="space-y-8">
            {/* Color Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Paleta de Colores</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div 
                    className="h-40 rounded-lg mb-4 flex items-center justify-center text-white"
                    style={{ backgroundColor: activeColor }}
                  >
                    {colorFormats[colorFormat]}
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="color-picker">Selecciona un color:</Label>
                    <div className="flex gap-3 mt-2">
                      <Input 
                        id="color-picker"
                        type="color" 
                        value={activeColor} 
                        onChange={(e) => setActiveColor(e.target.value)}
                        className="w-12 h-10 p-1"
                      />
                      <Input 
                        type="text" 
                        value={activeColor} 
                        onChange={(e) => setActiveColor(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant={colorFormat === "hex" ? "default" : "outline"} 
                      onClick={() => setColorFormat("hex")}
                      size="sm"
                    >
                      HEX
                    </Button>
                    <Button 
                      variant={colorFormat === "rgb" ? "default" : "outline"} 
                      onClick={() => setColorFormat("rgb")}
                      size="sm"
                    >
                      RGB
                    </Button>
                    <Button 
                      variant={colorFormat === "hsl" ? "default" : "outline"} 
                      onClick={() => setColorFormat("hsl")}
                      size="sm"
                    >
                      HSL
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Variantes de Color</h3>
                  <div className="space-y-2">
                    {generateColorShades(activeColor).map((color, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-8 h-8 mr-4 rounded"
                          style={{ backgroundColor: color }}
                        ></div>
                        <span className="text-sm">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Typography Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Type className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Tipografía</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <Label htmlFor="font-size" className="mb-2 block">
                      Tamaño de fuente: {fontSize}px
                    </Label>
                    <Slider 
                      id="font-size"
                      min={8} 
                      max={72} 
                      step={1} 
                      value={[fontSize]} 
                      onValueChange={(value) => setFontSize(value[0])} 
                      className="mb-6"
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="line-height" className="mb-2 block">
                      Altura de línea: {lineHeight}
                    </Label>
                    <Slider 
                      id="line-height"
                      min={1} 
                      max={3} 
                      step={0.1} 
                      value={[lineHeight]} 
                      onValueChange={(value) => setLineHeight(value[0])} 
                      className="mb-6"
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="letter-spacing" className="mb-2 block">
                      Espaciado entre letras: {letterSpacing}px
                    </Label>
                    <Slider 
                      id="letter-spacing"
                      min={-2} 
                      max={10} 
                      step={0.5} 
                      value={[letterSpacing]} 
                      onValueChange={(value) => setLetterSpacing(value[0])} 
                      className="mb-6"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Vista previa</h3>
                  <div 
                    className="p-4 border rounded-lg"
                    style={{
                      fontSize: `${fontSize}px`,
                      lineHeight: lineHeight,
                      letterSpacing: `${letterSpacing}px`
                    }}
                  >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Jerarquía de Texto</h4>
                    <div className="space-y-2">
                      <p className="text-4xl">Título 1</p>
                      <p className="text-3xl">Título 2</p>
                      <p className="text-2xl">Título 3</p>
                      <p className="text-xl">Título 4</p>
                      <p className="text-lg">Texto grande</p>
                      <p className="text-base">Texto normal</p>
                      <p className="text-sm">Texto pequeño</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Spacing Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Layout className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Espaciado</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="spacing" className="mb-2 block">
                    Unidad de espaciado base: {spacing}px
                  </Label>
                  <Slider 
                    id="spacing"
                    min={4} 
                    max={32} 
                    step={4} 
                    value={[spacing]} 
                    onValueChange={(value) => setSpacing(value[0])} 
                    className="mb-6"
                  />
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Escala de espaciado</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-16">1x:</div>
                        <div className="text-sm">{spacing}px / {spacing/16}rem</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16">2x:</div>
                        <div className="text-sm">{spacing*2}px / {spacing*2/16}rem</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16">3x:</div>
                        <div className="text-sm">{spacing*3}px / {spacing*3/16}rem</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16">4x:</div>
                        <div className="text-sm">{spacing*4}px / {spacing*4/16}rem</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Visualización de Espaciado</h3>
                  <div className="border rounded-lg p-4">
                    <div 
                      className="bg-gray-200 rounded"
                      style={{ padding: `${spacing}px` }}
                    >
                      <div className="bg-white p-4 rounded border">
                        Elemento con padding {spacing}px
                      </div>
                    </div>
                    <div 
                      className="mt-4 flex"
                    >
                      <div className="bg-interior-blue w-24 h-24 rounded"></div>
                      <div style={{ width: `${spacing}px` }} className="bg-gray-200"></div>
                      <div className="bg-interior-green w-24 h-24 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="export" className="space-y-8">
            {/* Export Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <FileCode className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Exportar Estilos</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Formatos de exportación</h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start">
                      <FileCode className="mr-2 h-4 w-4" /> Exportar como CSS
                    </Button>
                    <Button className="w-full justify-start">
                      <FileCode className="mr-2 h-4 w-4" /> Exportar como SCSS
                    </Button>
                    <Button className="w-full justify-start">
                      <FileCode className="mr-2 h-4 w-4" /> Exportar como JSON
                    </Button>
                    <Button className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" /> Descargar guía de diseño (PDF)
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Componentes reutilizables</h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start">
                      <Component className="mr-2 h-4 w-4" /> Generar código HTML
                    </Button>
                    <Button className="w-full justify-start">
                      <Component className="mr-2 h-4 w-4" /> Generar código React
                    </Button>
                    <Button className="w-full justify-start">
                      <Component className="mr-2 h-4 w-4" /> Generar código Vue
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="preview" className="space-y-8">
            {/* Preview Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Previsualización Interactiva</h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className={device === "mobile" ? "bg-accent" : ""}
                      onClick={() => setDevice("mobile")}
                    >
                      Mobile
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={device === "tablet" ? "bg-accent" : ""}
                      onClick={() => setDevice("tablet")}
                    >
                      Tablet
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={device === "desktop" ? "bg-accent" : ""}
                      onClick={() => setDevice("desktop")}
                    >
                      Desktop
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div
                  className={`
                    border rounded-lg overflow-hidden transition-all duration-300
                    ${device === "mobile" ? "w-64" : device === "tablet" ? "w-128" : "w-full"}
                    ${darkMode ? "bg-gray-900 text-white" : "bg-white"}
                  `}
                >
                  <div className="p-4">
                    <h3 className={`font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                      Previsualización de Componente
                    </h3>
                    <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Ajusta los estilos para ver los cambios en tiempo real
                    </p>
                    <Button 
                      style={generateButtonStyles()}
                      className="text-white"
                    >
                      Botón de Ejemplo
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Collaboration Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Colaboración</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-4 w-4" />
                    <h3 className="font-medium">Comentarios</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Añade comentarios específicos a elementos del diseño
                  </p>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="mr-2 h-3 w-3" /> Añadir comentario
                  </Button>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <History className="h-4 w-4" />
                    <h3 className="font-medium">Historial de cambios</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Ve y restaura versiones anteriores del diseño
                  </p>
                  <Button variant="outline" size="sm">
                    <History className="mr-2 h-3 w-3" /> Ver historial
                  </Button>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4" />
                    <h3 className="font-medium">Permisos</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Gestiona quién puede ver o editar tu diseño
                  </p>
                  <Button variant="outline" size="sm">
                    <User className="mr-2 h-3 w-3" /> Gestionar permisos
                  </Button>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="documentation" className="space-y-8">
            {/* Documentation Section */}
            <section className="p-6 bg-white shadow rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Book className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Documentación</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Documentación técnica</h3>
                  <div className="prose max-w-none">
                    <p>
                      La documentación técnica incluye información detallada sobre los componentes,
                      sus propiedades y ejemplos de uso para desarrolladores.
                    </p>
                    <h4 className="text-base font-medium mt-4">Componente: Button</h4>
                    <table className="w-full border-collapse my-2">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Prop</th>
                          <th className="text-left py-2">Tipo</th>
                          <th className="text-left py-2">Por defecto</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">variant</td>
                          <td className="py-2"><code>string</code></td>
                          <td className="py-2">'default'</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">size</td>
                          <td className="py-2"><code>string</code></td>
                          <td className="py-2">'md'</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Accessibility className="h-4 w-4" />
                    <h3 className="text-lg font-medium">Accesibilidad</h3>
                  </div>
                  
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-2">Validación de contraste</h4>
                    <div className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
                      <div className="flex items-center">
                        <div 
                          className="w-6 h-6 mr-2 rounded"
                          style={{ backgroundColor: activeColor }}
                        ></div>
                        <div className="text-sm">Texto en blanco</div>
                      </div>
                      <div className={checkContrast(activeColor, "#FFFFFF") ? "text-green-600" : "text-red-600"}>
                        {checkContrast(activeColor, "#FFFFFF") ? "Aprobado" : "Fallido"} 
                        {" WCAG AA"}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
                      <div className="flex items-center">
                        <div 
                          className="w-6 h-6 mr-2 rounded"
                          style={{ backgroundColor: activeColor }}
                        ></div>
                        <div className="text-sm">Texto en negro</div>
                      </div>
                      <div className={checkContrast(activeColor, "#000000") ? "text-green-600" : "text-red-600"}>
                        {checkContrast(activeColor, "#000000") ? "Aprobado" : "Fallido"}
                        {" WCAG AA"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full">
                      <Accessibility className="mr-2 h-4 w-4" /> Ejecutar validación completa
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

// Utility functions
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return "rgb(0, 0, 0)";
}

function hexToHsl(hex: string): string {
  // Convert hex to rgb
  let r = 0, g = 0, b = 0;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    r = parseInt(result[1], 16) / 255;
    g = parseInt(result[2], 16) / 255;
    b = parseInt(result[3], 16) / 255;
  }

  // Find min and max
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h = Math.round(h * 60);
  }
  
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generateColorShades(baseColor: string): string[] {
  const shades = [];
  
  // Convert hex to rgb
  let r = 0, g = 0, b = 0;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(baseColor);
  if (result) {
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
  }

  // Generate 5 shades (lighter to darker)
  for (let i = 0; i < 5; i++) {
    const factor = 0.2 * i;
    
    // For lighter shades
    if (i < 2) {
      const lightFactor = 1 - factor * 2;
      const nr = Math.min(255, Math.round(r + (255 - r) * lightFactor));
      const ng = Math.min(255, Math.round(g + (255 - g) * lightFactor));
      const nb = Math.min(255, Math.round(b + (255 - b) * lightFactor));
      shades.unshift(`#${nr.toString(16).padStart(2, '0')}${ng.toString(16).padStart(2, '0')}${nb.toString(16).padStart(2, '0')}`);
    } 
    // For the base color
    else if (i === 2) {
      shades.push(baseColor);
    } 
    // For darker shades
    else {
      const darkFactor = factor;
      const nr = Math.round(r * (1 - darkFactor));
      const ng = Math.round(g * (1 - darkFactor));
      const nb = Math.round(b * (1 - darkFactor));
      shades.push(`#${nr.toString(16).padStart(2, '0')}${ng.toString(16).padStart(2, '0')}${nb.toString(16).padStart(2, '0')}`);
    }
  }

  return shades;
}

function checkContrast(color1: string, color2: string): boolean {
  // Simple contrast check (not a full WCAG implementation)
  // This is just a placeholder - a real implementation would use proper contrast ratio calculation
  
  // Convert hex to rgb
  const hex1 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color1);
  const hex2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color2);
  
  if (hex1 && hex2) {
    const r1 = parseInt(hex1[1], 16);
    const g1 = parseInt(hex1[2], 16);
    const b1 = parseInt(hex1[3], 16);
    
    const r2 = parseInt(hex2[1], 16);
    const g2 = parseInt(hex2[2], 16);
    const b2 = parseInt(hex2[3], 16);
    
    // Calculate relative luminance
    const luminance1 = 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
    const luminance2 = 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2;
    
    // Calculate contrast ratio
    const lightest = Math.max(luminance1, luminance2);
    const darkest = Math.min(luminance1, luminance2);
    const contrast = (lightest + 50) / (darkest + 50);
    
    // WCAG AA requires a contrast ratio of 4.5:1 for normal text
    return contrast >= 4.5;
  }
  
  return false;
}

export default DesignSpec;
