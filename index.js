/////////////////////////////////////////////////////////////

      // questão 01
      var valor =prompt("Digite um valor")
      if(valor >=10 ){
          alert("Valor maior que 10")
      }else if(valor <= 10 && valor >=1){
          alert("Valor menor que 10")
      }else{
          alert("Valor invalido")
      }


      /////////////////////////////////////////////////////
      // questão 02

      var nota1=5;
      var nota2=1;
      var nota3=6;
      var nota4=3;

      var media =(nota1+nota2+nota3+nota4)/4
      if(media>=6 && media <=10){
          console.log(media)
          alert('aprovado,parabens continue assim!')
      }else if (media <=5 && media>=0){
          console.log(media)
          alert('reprovado,tente melhorar')
      }
      //////////////////////////////////////////////////////
      // questão 03
      var idade = parseInt(prompt("digite sua idade"))
      var tempoTrab=parseInt(prompt("Digite o tempo trabalhando"))
      var codigoEmp= parseInt(prompt("Qual codigo do empregado"))
      if (idade >=60 && tempoTrab>=25){
      document.write ("O funcionario"+codigoEmp+"Precisa se aposentar pois tem"+idade+"anos,e,"+tempoTrab+"anos trabalhando.")
      }else {
          if (idade<65){
          if(tempoTrab<30){
              document.write("Nao requer aposentadoria")
     }else{document.write("O funcionario"+codigoEmp+"precisa se aposentar,pois esta"+tempoTrab+"anos trabalhando.")
    }
     }else{document.write("O funcionario"+codigoEmp+"precisa se aposentar,pois tem"+idade+"anos.")
    }
}
      //////////////////////////////////////////////////////
      // questão 04
      let productName="Arroz";
      let unitPrice =3.00;
      let quantityPurchased=4;
      let total=quantityPurchased=unitPrice;
      let Total=Total.toLocaleString("pt-BR",{style:"Currency",currency:"BRL"});

      if(quantityPurchased<=5){
          let discount=total=0.02;
          let totalPrice=total-discount;
          let TotalPrice=totalPrice.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); 

          console.log(`
          <strong>
          O cliente recebera um desconto de 2% pelo ${productName}.<br>
          valor da compra:${Total}<br>
          total a pagar (com desconto):${totalPrice}
          </strong>
         `)
      }else if(quantityPurchased > 5 && quantityPurchased <=10){
          let discount= total=0.003;
          let totalPrice=total-discount;
          let TotalPrice=totalPrice.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

          console.log(`
          <strong>
          O cliente recebera um desconto de 3% pelo ${productName}.<br>
          valor da compra:${Total}<br>
          total a pagar (com desconto):${totalPrice}
          </strong>
         `)
      }

      /////////////////////////////////////////////////////////////////
      // questão 05
       
      var cod = prompt("Digite o codigo");
      if(cod==1){
          alert ("Alimento nao perecivel");
      }else if (cod>=2 && cod <=4){
          alert("Alimento perecivel");
      }else if (cod>=5 && cod <=6){
          alert ("Vestuario");
      }else if (cod==7){
          alert("Higiene pessoal");
      }else if(cod>=8 && cod<=15){
          alert("Limpeza e utensilios domesticos");
      }else {
          alert("Valor invalido");
      }
      //////////////////////////////////////////////////////
      // quetão 06
      var codigo=parseFloat(prompt("Digite o codigo do produto"));
      var quantidade=parseFloat(prompt("Digite a quantidade"));
      var valor=parseFloat(prompt("Digite o valor"));

     var totaldo100=(1.70=quantidade);
           document.write("O valor do lanche e:"+totaldo100);
     var totaldo101=(2.30=quantidade);
           document.write("O valor do lanche e:"+totaldo101);
     var totaldo102=(2.60=quantidade);
           document.write("O valor do lanche e:"+totaldo102);
     var totaldo103=(2.40=quantidade);
           document.write("O valor do lanche e:"+totaldo103);
     var totaldo104=(2.50=quantidade);
           document.write("O valor do lanche e:"+totaldo104);
     var totaldo105=(1.00=quantidade);
           document.write("O valor do lanche e:"+totaldo105);
      /////////////////////////////////////////////////////////////////
      // questão 07
      let number = 101;

      while(number<=110){
          console.log(`<strong>${number}<strong`);
      }
      ///////////////////////////////////////////////////////
      // quetão 08
      let N= 10;
       for(let x =1; x <=N; x++){
           console.log(`<strong>${x}</strang>`);
        }
      ///////////////////////////////////////////////////////
      // questão 09
      function tabuCalc(){
          let intNumber= window.document.getElementById("IntNumber");
          let IntNumber= Number.parseInt(intNumber.value);
          let tabuada=[
              1 = IntNumber,
              2 = IntNumber,
              3 = IntNumber,
              4 = IntNumber,
              5 = IntNumber,
              6 = IntNumber,
              7 = IntNumber,
              8 = IntNumber,
              9 = IntNumber,
              10 = IntNumber
        ];
         let resul=window.document.getElementById("Resultado");
        <strong>
            Tabuada do numero:${IntNumber}\n
            1 * ${IntNumber} = ${tabuada[0]}\n
            2 * ${IntNumber} = ${tabuada[1]}\n
            3 * ${IntNumber} = ${tabuada[2]}\n
            4 * ${IntNumber} = ${tabuada[3]}\n
            5 * ${IntNumber} = ${tabuada[4]}\n
            6 * ${IntNumber} = ${tabuada[5]}\n
            7 * ${IntNumber} = ${tabuada[6]}\n
            8 * ${IntNumber} = ${tabuada[7]}\n
            9 * ${IntNumber} = ${tabuada[8]}\n
           10 * ${IntNumber} = ${tabuada[9]}
       </strong>
    }
    //////////////////////////////////////////////////////////////////////////
    // questão 10
    console.log("<strong>ordem crescente:</strong>")
    for (let number=1 ; number <=10 ; number ++){
        console.log(`<strong>${number}</strong>`);
}
    console.log("<strong>ordem decrescente:</strong>")
    for (let number2= 10 ; number2 >= 1 ; number2 --){
    console.log(`<strong>${number}</strong>`);
}
///////////////////////////////////////////////////////////////////////////////