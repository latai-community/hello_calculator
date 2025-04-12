# Usa una imagen oficial de Python como base
FROM python:3.11-slim

# Crea y usa un directorio de trabajo
WORKDIR /app

# Copia el archivo requirements.txt primero (para aprovechar la cache)
COPY requirements.txt .

# Instala dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

# Expone el puerto de Flask
EXPOSE 5001

# Comando para producción con Gunicorn
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "main:app"]