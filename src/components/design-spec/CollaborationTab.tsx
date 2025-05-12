
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  User, 
  History,
  Share,
  Clock
} from "lucide-react";

const CollaborationTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Miembros del Equipo</h2>
          
          <div className="space-y-3">
            {[
              { name: "Ana García", role: "Diseñadora principal", avatar: "AG" },
              { name: "Carlos Rodríguez", role: "Arquitecto", avatar: "CR" },
              { name: "Laura Martínez", role: "Cliente", avatar: "LM" },
              { name: "Javier López", role: "Contratista", avatar: "JL" },
            ].map((member, index) => (
              <div key={index} className="flex items-center p-2 hover:bg-gray-50 rounded">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-3">
                  {member.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-2">
              <User className="h-4 w-4 mr-2" />
              Invitar miembro
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
          
          <div className="space-y-4">
            {[
              { user: "Ana García", action: "actualizó especificaciones de iluminación", time: "Hace 2 horas" },
              { user: "Carlos Rodríguez", action: "añadió nuevos planos técnicos", time: "Ayer" },
              { user: "Laura Martínez", action: "aprobó selección de mobiliario", time: "Hace 2 días" },
              { user: "Javier López", action: "comentó sobre materiales de piso", time: "Hace 3 días" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <Clock className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
            
            <Button variant="ghost" size="sm" className="w-full text-gray-500">
              <History className="h-4 w-4 mr-2" />
              Ver todo el historial
            </Button>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-3">
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Discusión del Proyecto</h2>
            <div>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Compartir link
              </Button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 mb-4 h-96 overflow-y-auto">
            {[
              { user: "Ana García", message: "He actualizado las especificaciones de iluminación para la sala principal. Por favor, revisen y confirmen si están de acuerdo.", time: "10:30 AM", avatar: "AG" },
              { user: "Carlos Rodríguez", message: "Me parece bien la selección. ¿Podríamos considerar opciones más eficientes energéticamente?", time: "11:15 AM", avatar: "CR" },
              { user: "Laura Martínez", message: "Prefiero mantener el diseño original que aprobamos anteriormente para la iluminación.", time: "12:05 PM", avatar: "LM" },
              { user: "Ana García", message: "Podemos mantener el diseño pero usar bombillas LED de alta eficiencia que no alteren la temperatura de color que buscamos.", time: "12:30 PM", avatar: "AG" },
              { user: "Laura Martínez", message: "Esa opción me parece perfecta. Procedamos con eso.", time: "1:00 PM", avatar: "LM" },
            ].map((message, index) => (
              <div key={index} className={`flex mb-4 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                {index % 2 === 0 && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mr-2">
                    {message.avatar}
                  </div>
                )}
                <div className={`max-w-[70%] rounded-lg p-3 ${index % 2 === 1 ? 'bg-blue-50' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">{message.user}</span>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm">{message.message}</p>
                </div>
                {index % 2 === 1 && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold ml-2">
                    {message.avatar}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Input placeholder="Escribe un mensaje..." className="flex-1" />
            <Button>
              <MessageCircle className="h-4 w-4 mr-2" />
              Enviar
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Comentarios sobre Elementos</h2>
          
          <div className="space-y-4">
            {[
              { item: "Sofá principal", comment: "Necesitamos confirmar dimensiones exactas antes de la compra.", user: "Carlos Rodríguez", time: "Hace 1 día" },
              { item: "Iluminación sala", comment: "Verificar compatibilidad con sistema domótico existente.", user: "Ana García", time: "Hace 2 días" },
              { item: "Pintura paredes", comment: "El cliente prefiere un acabado mate en lugar de semi-brillante.", user: "Javier López", time: "Hace 3 días" },
            ].map((comment, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{comment.item}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Comentario</span>
                </div>
                <p className="text-sm mb-2">{comment.comment}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{comment.user}</span>
                  <span>{comment.time}</span>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Añadir nuevo comentario
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationTab;
