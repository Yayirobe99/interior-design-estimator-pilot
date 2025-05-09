
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface FormValues {
  name: string;
  client: string;
  budget: number;
  status: "planificación" | "en progreso" | "completado";
  estimatedTime: number;
  description?: string;
}

const NewProjectForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
  const { toast } = useToast();

  const onSubmit = (data: FormValues) => {
    console.log('Datos del nuevo proyecto:', data);
    
    // Aquí iría la lógica para enviar los datos al backend
    // Por ahora simulamos una respuesta exitosa
    toast({
      title: "Proyecto creado",
      description: "El proyecto se ha creado correctamente",
    });

    // Resetear formulario o redirigir
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre del proyecto</Label>
          <Input
            id="name"
            placeholder="Ej: Remodelación Apartamento 304"
            {...register("name", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="client">Cliente</Label>
          <Input
            id="client"
            placeholder="Nombre del cliente"
            {...register("client", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors.client && (
            <p className="text-sm text-red-500">{errors.client.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="budget">Presupuesto (€)</Label>
          <Input
            id="budget"
            type="number"
            placeholder="0.00"
            {...register("budget", {
              required: "Este campo es obligatorio",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "El presupuesto debe ser un valor positivo",
              },
            })}
          />
          {errors.budget && (
            <p className="text-sm text-red-500">{errors.budget.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="status">Estado</Label>
          <Select 
            onValueChange={(value) => setValue("status", value as "planificación" | "en progreso" | "completado")}
            defaultValue="planificación"
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="planificación">Planificación</SelectItem>
              <SelectItem value="en progreso">En progreso</SelectItem>
              <SelectItem value="completado">Completado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="estimatedTime">Tiempo estimado (días)</Label>
          <Input
            id="estimatedTime"
            type="number"
            placeholder="30"
            {...register("estimatedTime", {
              required: "Este campo es obligatorio",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Debe ser al menos 1 día",
              },
            })}
          />
          {errors.estimatedTime && (
            <p className="text-sm text-red-500">{errors.estimatedTime.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            placeholder="Detalles adicionales sobre el proyecto..."
            {...register("description")}
            className="min-h-[100px]"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Crear Proyecto
      </Button>
    </form>
  );
};

export default NewProjectForm;
