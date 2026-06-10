<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrinho 2026 - Conectando Campo e Cidade</title>
    <style>
        /* Estilos Gerais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: #f4f7f4;
            color: #333;
            line-height: 1.6;
        }

        /* Menu de Navegação */
        header {
            background-color: #1b4d3e;
            color: white;
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        header h1 {
            font-size: 24px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #a3e2a4;
        }

        /* Banner */
        .hero {
            background: linear-gradient(rgba(27, 77, 62, 0.8), rgba(27, 77, 62, 0.9)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200') no-repeat center center/cover;
            color: white;
            height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 20px;
        }

        .hero h2 {
            font-size: 42px;
            margin-bottom: 15px;
        }

        .hero p {
            font-size: 20px;
            max-width: 700px;
            margin-bottom: 30px;
        }

        .btn {
            background-color: #ff9f1c;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 25px;
            transition: background 0.3s;
            cursor: pointer;
            border: none;
        }

        .btn:hover {
            background-color: #e08610;
        }

        /* Seções Gerais */
        .container {
            max-width: 1100px;
            margin: auto;
            padding: 60px 20px;
        }

        .section-title {
            text-align: center;
            color: #1b4d3e;
            font-size: 32px;
            margin-bottom: 40px;
        }

        /* Cards de Categorias */
        .grid-categorias {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            text-align: center;
            border-top: 5px solid #2e7d32;
            transition: transform 0.2s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h3 {
            color: #2e7d32;
            margin-bottom: 10px;
        }

        /* Cronograma */
        .cronograma-lista {
            list-style: none;
            max-width: 600px;
            margin: auto;
        }

        .cronograma-lista li {
            background: white;
            margin-bottom: 15px;
            padding: 15px 20px;
            border-left: 5px solid #ff9f1c;
            border-radius: 0 8px 8px 0;
            display: flex;
            justify-content: space-between;
        }

        .cronograma-lista .data {
            font-weight: bold;
            color: #1b4d3e;
        }

        /* Rodapé */
        footer {
            background-color: #113327;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <header>
        <h1>🌱 Agrinho 2026</h1>
        <nav>
            <a href="#sobre" class="nav-link">Sobre</a>
            <a href="#categorias" class="nav-link">Categorias</a>
            <a href="#cronograma" class="nav-link">Cronograma</a>
        </nav>
    </header>

    <section class="hero">
        <h2>Agro Forte, Futuro Sustentável</h2>
        <p>Saber e atuar para melhorar o mundo. Conectando a criatividade das escolas com a inovação do meio ambiente.</p>
        <button id="btnAlerta" class="btn">Saiba Mais</button>
    </section>

    <section id="sobre" class="container">
        <h2 class="section-title">O que é o Programa Agrinho?</h2>
        <p style="text-align: center; max-width: 800px; margin: auto; font-size: 18px; color: #555;">
            O Agrinho é o maior programa de responsabilidade social rural. Em 2026, ele leva para as salas de aula temas essenciais como sustentabilidade, robótica e inovação, unindo a energia do campo com a tecnologia da cidade.
        </p>
    </section>

    <section id="categorias" style="background-color: #eef3ee;">
        <div class="container">
            <h2 class="section-title">Categorias do Concurso</h2>
            <div class="grid-categorias">
                <div class="card">
                    <h3>🎨 Desenho</h3>
                    <p>Espaço para os alunos das fases iniciais usarem as cores para
