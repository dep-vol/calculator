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
    this._multiply = document.getElementById('multiply');
    this._divide = document.getElementById('divide');
    this._sqr = document.getElementById('sqr');
    this._pow = document.getElementById('pow');
    this._dot = document.getElementById('dot');
    this._sin = document.getElementById('sin');
    this._cos = document.getElementById('cos');
    this._tan = document.getElementById('tan');
    this._ctan = document.getElementById('ctan');
    this._cube = document.getElementById('cube');
    this._percent = document.getElementById('percent');
    this._pi = document.getElementById('pi');
    this._tenPow = document.getElementById('tenPow');
    this._radical = document.getElementById('radical');
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
        this._input.focus();
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
            this._input.focus();
        }
        else {
            this._input.value = '-'+ this._input.value;
            this._input.focus();
        }
         
        
    }
    this._plusMinusBtn.addEventListener('click', plusMinusToggle);

    //Clear input method

    this._clearInput = function () {
        this._input.value = '';
        this._firstNum = '';
        this._secNum = '';
        this._result = '';
        this._input.focus();
    };
    this._clearBtn.addEventListener('click', this._clearInput.bind(this));


    //Backing sym method
    this._backspaceSym = function () {
        this._input.value = this._input.value.slice(0, this._input.value.length - 1);
        this._input.focus();
    }

    this._backspaceBtn.addEventListener('click', this._backspaceSym.bind(this));


    //Dot paste

    this._pasteDot = function () {
        if(this._input.value.indexOf('.') == -1 ) {
            this._input.value = this._input.value + '.';
        }
        this._input.focus();        
    }

    this._dot.addEventListener('click', this._pasteDot.bind(this));

    //Make operations

    this._chooseOperation = function (op) {
        this._operation = op;
        this._firstNum = this._input.value;
        this._input.focus();

        //Ignore '=' if clicked 'one-operation' btn such as sin, cos....

        if ((op == 'sqr') || (op == 'sin') || (op == 'cos') || (op == 'tan') ||
            (op == 'ctan') || (op == 'cube') || (op == 'pi') || (op == 'tenPow')) {
            this._makeResult();
        }
        else {
            this._input.value = '';
            this._result = '';
        }

    }


    this._makeResult = function () {
        this._input.focus();
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
                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = +this._firstNum - (+this._secNum);
                    this._input.value = this._result;
                }
                else {
                    this._result = this._result - (+this._secNum);
                    this._input.value = this._result;

                }
                break;
            case 'multiply':
                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = +this._firstNum * (+this._secNum);
                    this._input.value = this._result;
                }
                else {
                    this._result = this._result * (+this._secNum);
                    this._input.value = this._result;

                }
                break;
            case 'divide':
                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = +this._firstNum / (+this._secNum);
                    this._input.value = this._result;
                }
                else {
                    this._result = this._result / (+this._secNum);
                    this._input.value = this._result;

                }
                break;
            case 'sqr':
                this._input.value = Math.sqrt(this._firstNum);
                break;
            case 'pow':
                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = Math.pow(+this._firstNum, +this._secNum);
                    this._input.value = this._result;
                }
                else {
                    this._result = Math.pow(this._result, +this._secNum);
                    this._input.value = this._result;

                }
                break;
            case 'sin':
                this._input.value = Math.sin(this._firstNum);
                break;
            case 'cos':
                this._input.value = Math.cos(this._firstNum);
                break;
            case 'tan':
                this._input.value = Math.tan(this._firstNum);
                break;
            case 'ctan':
                this._input.value = 1 / (Math.tan(this._firstNum));
                break;
            case 'cube':
                this._input.value = Math.pow(this._firstNum, 3);
                break;
            case 'percent':
                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = ((+this._firstNum) / 100) * +this._secNum;
                    this._input.value = this._result;
                }
                else {
                    this._result = ((+this._result) / 100) / this._secNum;
                    this._input.value = this._result;

                }
                break;
            case 'pi':
                this._input.value = Math.PI;
                break;
            case 'tenPow':
                this._input.value = Math.pow(10, this._firstNum);
                break;
            case 'radical':
                if (!this._result) {
                    this._secNum = this._input.value;
                    this._result = Math.pow(+this._firstNum, (1 / +this._secNum));
                    this._input.value = this._result;
                }
                else {
                    this._result = Math.pow(this._result, (1 / +this._secNum));
                    this._input.value = this._result;

                }
                break;
        }

    }
    
    
    this._plus.addEventListener('click', this._chooseOperation.bind(this,'plus'));
    this._minus.addEventListener('click', this._chooseOperation.bind(this,'minus'));
    this._multiply.addEventListener('click', this._chooseOperation.bind(this,'multiply'));
    this._divide.addEventListener('click', this._chooseOperation.bind(this,'divide'));
    this._sqr.addEventListener('click', this._chooseOperation.bind(this,'sqr'));
    this._pow.addEventListener('click', this._chooseOperation.bind(this,'pow'));
    this._sin.addEventListener('click', this._chooseOperation.bind(this,'sin'));
    this._cos.addEventListener('click', this._chooseOperation.bind(this,'cos'));
    this._tan.addEventListener('click', this._chooseOperation.bind(this,'tan'));
    this._ctan.addEventListener('click', this._chooseOperation.bind(this,'ctan'));
    this._cube.addEventListener('click', this._chooseOperation.bind(this,'cube'));
    this._percent.addEventListener('click', this._chooseOperation.bind(this,'percent'));
    this._pi.addEventListener('click', this._chooseOperation.bind(this,'pi'));
    this._tenPow.addEventListener('click', this._chooseOperation.bind(this,'tenPow'));
    this._radical.addEventListener('click', this._chooseOperation.bind(this,'radical'))
    this._resBtn.addEventListener('click', this._makeResult.bind(this));

    //Checking input
    this._checkKeyInput = function (e) {
        if (e.charCode && ((e.charCode < 48 || e.charCode > 57)) && e.charCode != 46) {
            e.preventDefault();
        }

        //Plus key

        if (e.charCode == 43) {
            this._chooseOperation.bind(this,'plus')();
        }

        //Minus key

        if (e.charCode == 45) {
            this._chooseOperation.bind(this,'minus')();
        }

        //Multiply key

        if (e.charCode == 42) {
            this._chooseOperation.bind(this,'multiply')();
        }
        
        //Divide key

        if (e.charCode == 47) {
            this._chooseOperation.bind(this,'divide')();
        }

        //Divide key

        if ((e.charCode == 61) || (e.charCode == 13)) {
            this._makeResult.bind(this)();
        }
    }

    this._input.addEventListener('keypress', this._checkKeyInput.bind(this));

} 



let calculator = new Calculator();
