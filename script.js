// Função para adicionar um item ao carrinho
function addToCart(itemName, price) {
    // Verifica se já existe um carrinho na sessão
    let cart = sessionStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    
    // Adiciona o item ao carrinho
    const item = {
      name: itemName,
      price: price
    };
    cart.push(item);
    
    // Salva o carrinho na sessão
    sessionStorage.setItem('cart', JSON.stringify(cart));
    
    // Exibe uma mensagem de confirmação
    alert('Item adicionado ao carrinho!');
  }
  
  // Função para fazer chamada direta para um número de celular
  function makeCall(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
  }
  