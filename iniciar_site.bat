@echo off
title Frutos da Leitura - Mostra Cultural PTL 2026
echo ====================================================================
echo   FRUTOS DA LEITURA - PORTFOLIO DIGITAL & VITRINE VIRTUAL (ETAPA 3)
echo   Disciplina PTL - Municipio de Queimados - RJ
echo ====================================================================
echo.
echo [!] Para acessar no seu COMPUTADOR:
echo     http://localhost:3000
echo.
echo [!] Para acessar no seu CELULAR (conectado no mesmo Wi-Fi):
echo     http://192.168.3.59:3000
echo.
echo Abrindo o site no navegador do computador...
start http://localhost:3000
echo.
echo Servidor ativo! Pressione Ctrl+C para encerrar.
echo ====================================================================
python -m http.server 3000
