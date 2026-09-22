def addmultiplenumbers(numbers):
  result = 0

  for number in numbers:
    result = result + number

  return result

def multiplymultiplenumbers(numbers):
  result = 1

  for number in numbers:
    result = result * number

  return result

def isiteven(num):
  if int(num) - num == 0 and num % 2 == 0:
    return True
  else:
    return False 

def isitaninteger(num):
  if int(num) - num == 0 :
    return True
  else:
    return False 

def menu():
  option = int(input("\n1. Sumar multiples números \n2. Multiplicar multiples números \n3. Es par y entero \n4. Es entero \n5. Salir \nQue operacion quieres hacer? "))
  return option

def get_numbers():
  numbers = []
  add_more = "s"

  while add_more != "n":
    number = float(input("\nIngresa un numero: "))
    numbers.append(number)
  
    if len(numbers) >= 2:
      add_more = input("\nQuieres agregar otro número s/n? ") 

  return numbers

def main():
  option = menu()

  while option != 5:
    match option:
        case 1:
            numbers = get_numbers()
            result = addmultiplenumbers(numbers)
            print("\nEl resultado de la suma es ", result)

        case 2:
            numbers = get_numbers()
            result = multiplymultiplenumbers(numbers)
            print("\nEl resultado de la multiplicación es ", result)

        case 3:
             num = float(input("\nIngresa un numero: ")) 
             result = isiteven(num)
             print("\nEl número es par y entero ", result)

        case 4:
            num = float(input("\nIngresa un numero: ")) 
            result = isitaninteger(num)
            print("\nEl número es entero ", result)


        case _:
            print("\nOpcion no valida")

    option = menu()

if __name__=="__main__":
  main()