 function createStars() {
            const starsBg = document.getElementById('stars-bg');
            const starCount = 150;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Случайный размер звезды
                const size = Math.random() * 3 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Случайная позиция
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Случайная длительность мерцания
                const duration = Math.random() * 3 + 2;
                star.style.animationDuration = `${duration}s`;
                
                // Случайная задержка анимации
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsBg.appendChild(star);
            }
        }

        // Мобильное меню
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileBtn) {
            mobileBtn.addEventListener('click', function() {
                if (mobileMenu.style.right === '0px') {
                    mobileMenu.style.right = '-100%';
                    this.innerHTML = '<i class="fas fa-bars"></i>';
                } else {
                    mobileMenu.style.right = '0';
                    this.innerHTML = '<i class="fas fa-times"></i>';
                }
            });
        }

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.style.right = '-100%';
                if (mobileBtn) {
                    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        

        // Инициализация звезд
        window.addEventListener('DOMContentLoaded', createStars);




        