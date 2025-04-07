const restaurantMenus = {
  "1": [
    {
      "id": "111",
      "name": "Hambúrguer Clássico com Queijo",
      "description": "Hambúrguer tradicional com um suculento hambúrguer de carne, queijo cheddar derretido, alface fresca, tomate e nosso molho especial.",
      "price": 10.99,
      "image": "@/assets/images/menu/burguermania/classic.png",
      "ingredients": ["carne de hambúrguer", "queijo cheddar", "alface", "tomate", "molho especial", "pão de brioche"],
      "quantity": { "peso": "200g" }
    },
    {
      "id": "112",
      "name": "Hambúrguer com Bacon e Molho Barbecue",
      "description": "Recheado com bacon crocante, molho barbecue defumado e um hambúrguer de carne grelhado, coberto com queijo cheddar.",
      "price": 12.99,
      "image": "@/assets/images/menu/burguermania/bacon.png",
      "ingredients": ["carne de hambúrguer", "queijo cheddar", "bacon", "molho barbecue", "alface", "tomate", "pão de brioche"],
      "quantity": { "peso": "250g" }
    },
    {
      "id": "113",
      "name": "Delícia Vegetariana",
      "description": "Hambúrguer de legumes grelhados, abacate, brotos, alface, tomate e um toque de maionese de alho.",
      "price": 9.99,
      "image": "@/assets/images/menu/burguermania/veggie.png",
      "ingredients": ["hambúrguer vegetariano", "abacate", "brotos", "alface", "tomate", "maionese de alho", "pão integral"],
      "quantity": { "peso": "180g" }
    }
  ],
  "2": [
    {
      "id": "121",
      "name": "Espaguete à Carbonara",
      "description": "Massa italiana tradicional com molho cremoso de ovos, pancetta e parmesão fresco ralado.",
      "price": 13.99,
      "image": "@/assets/images/menu/cantinabella/carbonara.png",
      "ingredients": ["espaguete", "gema de ovo", "pancetta", "queijo parmesão", "pimenta preta"],
      "quantity": { "peso": "300g" }
    },
    {
      "id": "122",
      "name": "Pizza Margherita",
      "description": "Pizza assada no forno a lenha com mozzarella fresca, tomates maduros e manjericão.",
      "price": 14.99,
      "image": "@/assets/images/menu/cantinabella/margherita.png",
      "ingredients": ["massa de pizza", "mozzarella", "tomate", "manjericão", "azeite de oliva"],
      "quantity": { "diametro": "30cm" }
    },
    {
      "id": "123",
      "name": "Lasanha ao Forno",
      "description": "Camadas de massa com molho de carne rico, béchamel cremoso e uma crosta dourada de queijo derretido.",
      "price": 15.99,
      "image": "@/assets/images/menu/cantinabella/lasagna.png",
      "ingredients": ["massa de lasanha", "molho de carne", "molho béchamel", "queijo parmesão"],
      "quantity": { "peso": "400g" }
    }
  ],
  "3": [
    {
      "id": "131",
      "name": "Prato de Sushi",
      "description": "Uma variedade de nigiri, sashimi e makis frescos para agradar qualquer amante de sushi.",
      "price": 24.99,
      "image": "@/assets/images/menu/sushihouse/platter.png",
      "ingredients": ["nigiri", "sashimi", "rolos de maki", "wasabi", "gengibre em conserva"],
      "quantity": { "unidades": 12 }
    },
    {
      "id": "132",
      "name": "Rolo de Atum Picante",
      "description": "Atum fresco com um toque de maionese picante e sementes de gergelim, enrolado em arroz temperado.",
      "price": 8.99,
      "image": "@/assets/images/menu/sushihouse/tuna.png",
      "ingredients": ["atum", "maionese picante", "sementes de gergelim", "nori", "arroz de sushi"],
      "quantity": { "unidades": 8 }
    },
    {
      "id": "133",
      "name": "Rolo Dragão",
      "description": "Enguia, abacate e pepino, regados com molho de enguia doce e decorados com ovas de peixe.",
      "price": 12.99,
      "image": "@/assets/images/menu/sushihouse/roll.png",
      "ingredients": ["enguia", "abacate", "pepino", "molho de enguia", "ovas de peixe"],
      "quantity": { "unidades": 8 }
    }
  ],
  "4": [
    {
      "id": "141",
      "name": "Petit Gâteau",
      "description": "Bolo Petit Gâteau com um centro quente e cremoso, servido com sorvete de baunilha.",
      "price": 6.99,
      "image": "@/assets/images/menu/docesecia/lavacake.png",
      "ingredients": ["chocolate amargo", "manteiga", "açúcar", "farinha", "ovos", "sorvete de baunilha"],
      "quantity": { "peso": "150g" }
    },
    {
      "id": "142",
      "name": "Cupcake Red Velvet",
      "description": "Cupcake de red velvet molhadinho, coberto com uma cobertura de cream cheese.",
      "price": 3.99,
      "image": "@/assets/images/menu/docesecia/redvelvet.png",
      "ingredients": ["massa red velvet", "cobertura de cream cheese", "açúcar", "ovos"],
      "quantity": { "unidade": 1 }
    },
    {
      "id": "143",
      "name": "Tiramisu",
      "description": "Sobremesa italiana tradicional com camadas de biscoitos embebidos em café e mascarpone cremoso.",
      "price": 7.99,
      "image": "@/assets/images/menu/docesecia/tiramisu.png",
      "ingredients": ["biscoitos", "queijo mascarpone", "espresso", "cacau em pó"],
      "quantity": { "peso": "200g" }
    }
  ],
  "5": [
    {
      "id": "151",
      "name": "Pizza de Pepperoni",
      "description": "Clássica pizza de pepperoni com mozzarella e nosso molho de tomate exclusivo, assada à perfeição.",
      "price": 12.99,
      "image": "@/assets/images/menu/pizzamania/pepperoni.png",
      "ingredients": ["massa de pizza", "pepperoni", "queijo mozzarella", "molho de tomate"],
      "quantity": { "diametro": "30cm" }
    },
    {
      "id": "152",
      "name": "Pizza Quatro Queijos",
      "description": "Uma mistura cremosa de mozzarella, provolone, parmesão e gorgonzola, criando uma obra-prima de queijos.",
      "price": 13.99,
      "image": "@/assets/images/menu/pizzamania/cheese.png",
      "ingredients": ["massa de pizza", "queijo mozzarella", "queijo provolone", "queijo parmesão", "queijo gorgonzola"],
      "quantity": { "diametro": "30cm" }
    },
    {
      "id": "153",
      "name": "Pizza Vegetariana",
      "description": "Carregada com pimentões frescos, cebolas, cogumelos, azeitonas e tomates em uma crosta de grãos integrais.",
      "price": 11.99,
      "image": "@/assets/images/menu/pizzamania/vegetarian.png",
      "ingredients": ["massa integral", "pimentões", "cebolas", "cogumelos", "azeitonas", "tomates"],
      "quantity": { "diametro": "30cm" }
    }
  ]

};

export default restaurantMenus;