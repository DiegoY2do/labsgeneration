import requests

def trivia_fetch(num):
    url = f"https://opentdb.com/api.php?amount={num}"

    response = requests.get(url)

    trivia = response.json()
    return trivia

def main():
  num = int(input("¿Cuántas preguntas quieres? " ))
  result = trivia_fetch(num)
  
  questions = result["results"]

  for i, question in enumerate(questions, 1):
    print(f"{i}. {question['question']}")

if __name__=="__main__":
  main()