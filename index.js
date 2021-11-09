var firstName = prompt("Iltimos ismingizni yozing: ")
console.log("Sizning ismingiz => "+firstName)
var age = +prompt(firstName+" iltimos endi yoshingizni ham yozing:")
console.log(firstName+" sizning yoshingiz => "+age+" da")
var proposal = prompt("Matemetikadan bilimingizni sinashni istaysizmi. Xa yoki yo'q deb yozing: ")
if (proposal == "xa" || proposal == "Xa" || proposal == "XA"){
               console.log(firstName+"siz matematikadan bilimingizni sinamoqchisiz. Unda dasturni davom ettiramiz. Davom etganingiz uchun rahmat!")
               alert(firstName+" siz matematikadan bilimingizni sinamoqchisiz. Unda biz sizga 5 ta misol beramiz. Hamma savollarga to'g'ri javob topsangiz sizni dasturning so'nggida tabriklaymiz agarda biror xatolikka yo'l qo'ysangiz to'g'ri yechimni ko'rsatamiz. Unda sizga omad!")
               var problem1 = +prompt(firstName+" 1-misolni yeching => 7 + 3 = ?")
               if (problem1 == 10){
                              console.log("1-misolning javobi => 7 + 3 = 10. "+firstName+" siz "+problem1+" raqamini kiritdingiz bu to'gri javob!")
               }
               else if (problem1 < 10 || problem1 > 10){
                              console.log("1-misolning javobi => 7 + 3 = 10. "+firstName+" siz "+problem1+" raqamini kiritdingiz bu noto'gri javob!")
                              alert("1-misolning javobi => 7 + 3 = 10. "+firstName+" siz "+problem1+" raqamini kiritdingiz bu noto'gri javob!")
               }
               else{
                              console.log(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
                              alert(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
               }

               var problem2 = +prompt(firstName+" 2-misolni yeching => 7 - 3 = ?")
               if (problem2 == 4){
                              console.log("2-misolning javobi => 7 - 3 = 4. "+firstName+" siz "+problem2+" raqamini kiritdingiz bu to'gri javob!")
               }
               else if (problem2 < 4 || problem2 > 4){
                              console.log("2-misolning javobi => 7 - 3 = 4. "+firstName+" siz "+problem2+" raqamini kiritdingiz bu noto'gri javob!")
                              alert("2-misolning javobi => 7 - 3 = 4. "+firstName+" siz "+problem2+" raqamini kiritdingiz bu noto'gri javob!")
               }
               else{
                              console.log(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
                              alert(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
               }

               var problem3 = +prompt(firstName+" 3-misolni yeching => 7 * 3 = ?")
               if (problem3 == 21){
                              console.log("3-misolning javobi => 7 * 3 = 21. "+firstName+" siz "+problem3+" raqamini kiritdingiz bu to'gri javob!")
               }
               else if (problem3 < 21 || problem3 > 21){
                              console.log("3-misolning javobi => 7 * 3 = 21. "+firstName+" siz "+problem3+" raqamini kiritdingiz bu noto'gri javob!")
                              alert("3-misolning javobi => 7 * 3 = 21. "+firstName+" siz "+problem3+" raqamini kiritdingiz bu noto'gri javob!")
               }
               else{
                              console.log(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
                              alert(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
               }

               var problem4 = +prompt(firstName+" 4-misolni yeching => 85 / 2  = ?")
               if (problem4 == 85/2){
                              console.log("4-misolning javobi => 85 / 2 = "+(85/2)+". "+firstName+" siz "+problem4+" raqamini kiritdingiz bu to'gri javob!")
               }
               else if (problem4 < (85/2) || problem4 > (85/2)){
                              console.log("4-misolning javobi => 85 / 2 = "+(85/2)+". "+firstName+" siz "+problem4+" raqamini kiritdingiz bu noto'gri javob!")
                              alert("4-misolning javobi => 85 / 2 = "+(85/2)+". "+firstName+" siz "+problem4+" raqamini kiritdingiz bu noto'gri javob!")
               }
               else{
                              console.log(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
                              alert(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
               }

               var problem5 = +prompt(firstName+" 5-misolni yeching => 85 % 2  = ?")
               if (problem5 == 85%2){
                              console.log("5-misolning javobi => 85 % 2 = "+(85%2)+". "+firstName+" siz "+problem5+" raqamini kiritdingiz bu to'gri javob!")
               }
               else if (problem5 < (85%2) || problem5 > (85%2)){
                              console.log("5-misolning javobi => 85 % 2 = "+(85%2)+". "+firstName+" siz "+problem5+" raqamini kiritdingiz bu noto'gri javob!")
                              alert("5-misolning javobi => 85 % 2 = "+(85%2)+". "+firstName+" siz "+problem5+" raqamini kiritdingiz bu noto'gri javob!")
               }
               else{
                              console.log(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
                              alert(firstName+" siz son kiritmadingiz, iltimos qayta urinib bu gal son kiriting")
               }
               if (problem1 == 10 && problem2 == 4 && problem3 == 21 && problem4 == 85/2 && problem5 == 85%2){
                              console.log(firstName+" sizni tabriklaymiz barcha misollarga to'g'ri javob topdingiz, bilimingiz bundanda ziyoda bo'lsin, ishlaringgizga omad tilaymiz oilangizning baxtiga doimo so'g' bo'ling. Rahmat deya Rasuljon")
                              alert(firstName+" tabriklaymiz barcha misollarni to'g'ri yechdingiz, bilimingiz bundanda ziyoda bo'lsin, ishlaringgizga omad tilaymiz oilangizning baxtiga doimo so'g' bo'ling. Sizga omad tilab Rasuljon")
               }
              else{
                             console.log(firstName+" misollarda xatoliklar mavjud. E'tibor uchun rahmat, ishlaringgizga omad tilaymiz oilangizning baxtiga doimo so'g' bo'ling. Sizga omad tilab Rasuljon. Dastur tugadi!")
                             alert(firstName+" bazi misollarda xatolikka yo'l qo'ydingiz. E'tibor uchun rahmat, ishlaringgizga omad tilaymiz oilangizning baxtiga doimo so'g' bo'ling. Sizga omad tilab Rasuljon. Dastur tugadi!")
              }
               
            
}
else if (proposal == "yo'q" || proposal == "Yo'q" || proposal == "YO'Q"){
               console.log(firstName+" siz matematikadan bilimingizni sinamoqchi emassiz. Unda dasturni shu yerda tugatamiz. Etiboringiz uchun rahmat!")
               alert(firstName+" siz matematikadan bilimingizni sinamoqchi emassiz. Unda dasturni shu yerda tugatamiz. Etiboringiz uchun rahmat!")
}
else{
               console.log(firstName+" siz boshqa so'zni kiritdingiz, eslatib o'tamiz sizga => xa <= yoki => yo'q <= deb yozish taklif qilingan edi")
               alert(firstName+" siz boshqa so'zni kiritdingiz, eslatib o'tamiz sizga => xa <= yoki => yo'q <= deb yozish taklif qilingan edi.")
}