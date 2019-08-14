function Calculator(){

    //Init properties
    
    //...............Elements Node...............
    this._showAddButton = document.getElementById('showAddOp');
    this._addOperators = document.querySelector('.addOperators');
    this._input = document.getElementById('inp');
    this._plusMinusBtn = document.getElementById('plusMinusToggle');
    this._clearBtn = document.getElementById('clearBtn');
    this._backspaceBtn = document.getElementById('backspace')
    this._plus = document.getElementById('plus');
    this._minus = document.getElementById('minus');
    this._resBtn = document.getElementById('resBtn');
    //................Properties.................
    this._firstNum = '';
    this._secNum = '';
    this._operation = '';
   
    //Hide-show additional operators

    this._showAddButton.addEventListener('click', ()=>{
        this._addOperators.classList.toggle('hide');
    });
    
    
    //Create array of numbers NODes

    let numbersElems = [];
    document.querySelectorAll('.sectionFirst>div').forEach(el =>{numbersElems.push(el)});
    document.querySelectorAll('.sectionSec>div').forEach(el =>{numbersElems.push(el)});
    document.querySelectorAll('.sectionThird>div').forEach(el =>{numbersElems.push(el)});
    document.querySelectorAll('.sectionForth>div').forEach(el =>{numbersElems.push(el)});
    this.numbers = numbersElems;

    //Add listener to numbers
    
    let numListen = (e) => {
        this._input.value += e.target.innerText;
    }; 
    this.numbers.forEach(element => {
        element.addEventListener('click', numListen)
    });

    //+/- functionality
    
    let plusMinusToggle = () => {
        let negPos = this._input.value[0];
        if(negPos == '-') {
            let newNum = this._input.value.slice(1);
            this._input.value = newNum;
        }
        else {
            this._input.value = '-'+ this._input.value;
        }
         
        
    }
    this._plusMinusBtn.addEventListener('click', plusMinusToggle);

    //Clear input method

    this._clearInput = function(){
        this._input.value = '';
        this._firstNum = '';
        this._secNum = '';
        this._result = '';
    };
    this._clearBtn.addEventListener('click', this._clearInput.bind(this));


    //Backing sym method
    this._backspaceSym = function () {
        this._input.value = this._input.value.slice(0,this._input.value.length-1);
    }
    
    this._backspaceBtn.addEventListener('click',this._backspaceSym.bind(this));

    //Make operations

    this._makeOperation = function (op) {

        this._operation = op;
        this._firstNum = this._input.value;
        this._input.value = '';
        this._result = '';


    }
          
    this._makeResult = function () {
        switch (this._operation) {
            case 'plus':

                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = +this._firstNum + (+this._secNum);
                    this._input.value = this._result;
                }
                else {
                    this._result = this._result + (+this._secNum);
                    this._input.value = this._result;
                    
                }

                
               

                break;
            case 'minus':
                if ((!this._secNum) || (this._result)) {
                    this._secNum = this._input.value;
                    this._result = +this._firstNum - (+this._secNum);
                    this._input.value = this._result;
                }
                break;
        }
        
    }
    
    
    this._plus.addEventListener('click', this._makeOperation.bind(this,'plus'));
    this._minus.addEventListener('click', this._makeOperation.bind(this,'minus'));
    this._resBtn.addEventListener('click', this._makeResult.bind(this));

} 



let calculator = new Calculator();
