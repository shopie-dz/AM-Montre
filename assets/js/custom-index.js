
      function openNav() {
         document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
         document.getElementById("mySidenav").style.width = "0";
      }



      //-----------------

      function searchProducts() {
         // الكلمة المدخلة في مربع البحث
         var searchTerm = document.querySelector('.form-control').value.trim().toLowerCase();

         // الحصول على العناصر الخاصة بالكلمة الخطأ و التصنيفات
         var noResultMessage = document.getElementById('noResult');
         var fashionSections = document.querySelectorAll('.fashion_section');

         // تابع يتحقق من وجود منتجات مطابقة ويخفي/يظهر التصنيفات ويعرض/يخفي رسالة الخطأ بناء على النتائج
         function checkProducts(section) {
            var cards = section.querySelectorAll('.card');
            var foundMatch = false;

            for (var i = 0; i < cards.length; i++) {
               var card = cards[i];
               var h4 = card.querySelector('.shirt_text').textContent.trim().toLowerCase();

               if (h4.includes(searchTerm)) {
                  card.style.display = 'block';
                  foundMatch = true;
               } else {
                  card.style.display = 'none';
               }
            }

            if (foundMatch) {
               section.style.display = 'block';
               noResultMessage.style.display = 'none';
            } else {
               section.style.display = 'none';
            }
         }

         // تحقق من التصنيفات وتطبيق الكود عليها
         fashionSections.forEach(function (section) {
            checkProducts(section);
         });

         // إظهار رسالة الخطأ إذا لم يتم العثور على منتجات في أي تصنيف
         var allSectionsHidden = true;
         fashionSections.forEach(function (section) {
            if (section.style.display !== 'none') {
               allSectionsHidden = false;
            }
         });

         if (allSectionsHidden) {
            noResultMessage.style.display = 'block';
         }
      }

      // dark mood
      const toggleSwitch = document.querySelector('#toggle');

      toggleSwitch.addEventListener('change', () => {
         document.body.classList.toggle('dark-theme');
      });



      // الوظيفة التي تنقل البيانات إلى صفحة الطلب
      function orderNow(productName, price, description, imageUrl) {
         // تحديد العنوان الذي يحيل إلى صفحة الطلب
         var orderPage = "order.html";

         // إعداد البيانات التي سيتم تمريرها إلى صفحة الطلب عبر الرابط
         var queryParams = "?productName=" + encodeURIComponent(productName) +
            "&price=" + encodeURIComponent(price) +
            "&description=" + encodeURIComponent(description) +
            "&imageUrl=" + encodeURIComponent(imageUrl);

         // توجيه المستخدم إلى صفحة الطلب مع تمرير البيانات عبر الرابط
         window.location.href = orderPage + queryParams;
      }
 