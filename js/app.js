function Furry() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }
    
    function Coin() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    
    }
    
    function game() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
    
        this.index = function (x, y) {
            return x + (y * 10);
        }
    
        this.hideVisibleFurry = function () {
            var visibleFurry = document.querySelector(".furry");
            visibleFurry.classList.remove("furry");
        }
    
        this.showFurry = function () {
            this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    
        }
        this.showCoin = function(){
            this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
        }
    
    
    
        document.addEventListener("keydown", key);
    
        function key(event) {
            self.turnFurry(event);
        }
    
    
        this.turnFurry = function (event) {
            if (event.which == "37") {
                self.furry.direction = "left";
     
            } else if (event.which == "39") {
                self.furry.direction = "right";
     
            } else if (event.which == "40") {
                self.furry.direction = "down";
     
            } else if (event.which == "38") {
                self.furry.direction = "up";
            }
            
        }
        
        var self = this;
        this.startGame = function () {
            this.idSetInterval = window.setInterval(function () {
                console.log(self.furry.x, self.furry.y);
                self.hideVisibleFurry();
                self.moveFurry();
                
            }, 100);
    
       }
    
    
        this.moveFurry= function() {
            
            if (self.furry.direction === "right") {
                self.furry.x = self.furry.x + 1;
                self.showFurry();
                self.gameOver();
                
                
            } else if (self.furry.direction === "left") {
                self.furry.x = self.furry.x - 1;
                self.gameOver();
                self.showFurry();
                
                
                
                
            } else if (self.furry.direction === "up") {
                
                self.furry.y = self.furry.y - 1;
                self.gameOver();   
                self.showFurry();
                
                
                
            } else if (self.furry.direction === "down") {
                self.furry.y = self.furry.y + 1;
                self.showFurry();
                self.gameOver();
                
                
            }
            
            self.checkCoinCollision();
           
        }
        
        this.checkCoinCollision = function(){
            if( this.furry.y === this.coin.y && this.furry.x === this.coin.x ){
                document.querySelector(".coin").classList.remove("coin");
                this.coin = new Coin();
                this.showCoin();
                var score = document.querySelector("#score strong").innerHTML=1+ this.score++;
                console.log(this.score);
            }
        }
        this.gameOver = function(){
            
            if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y>9){
            console.log("game over");
                clearInterval(this.idSetInterval);
                document.querySelector(".coin").classList.remove("coin");
                this.gameOverText();
            }
            
        }
        this.gameOverText = function(){
            var text =document.querySelector("#over");
            console.log(text);
            text.style.display="block";    
    
        }
    }
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
    
        var Game = new game();
        Game.showFurry();
        Game.showCoin();
        Game.startGame();
    
    }); 