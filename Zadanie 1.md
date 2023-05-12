Laboratorium wykonany studentem: Artur Moroz

Postęp uruchomienia:
  a)Pobrać pliki Dockerfile,server.js,package.js
  b)W terminalu przejść do katalogu z pkilami
  c)Zbudować obraz poleceniem:
    docker build -t zad1 . #(zad1 - nazwa obrazu, może być dowolną
  d)Uruchomić kontener poleceniem:
    docker run -p 3000:3000 zad1
  e)Przejśćna stronę za adresem:
    http://localhost:3000
  
