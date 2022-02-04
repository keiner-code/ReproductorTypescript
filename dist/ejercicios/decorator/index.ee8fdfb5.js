class Field {
    constructor(input){
        this.input = input;
        this.errors = [];
        let errorMessage = document.createElement('p');
        errorMessage.className = 'text-danger';
        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);
        this.input.addEventListener('input', ()=>{
            this.errors = [];
            this.validate();
            errorMessage.innerText = this.errors[0] || '';
        });
    }
    validate() {
    }
}
function RequiredFieldDecorator(field1) {
    let validate = field1.validate;
    field1.validate = function() {
        validate();
        let value = field1.input.value;
        if (!value) field1.errors.push('Requerido');
    };
    return field1;
}
function EmailFieldDecorator(field2) {
    let validate = field2.validate;
    field2.validate = function() {
        validate();
        let value = field2.input.value;
        if (value.indexOf('@') === -1) field2.errors.push('Debe Ser Un email');
    };
    return field2;
}
let field = new Field(document.querySelector('#email'));
EmailFieldDecorator(RequiredFieldDecorator(field));

//# sourceMappingURL=index.ee8fdfb5.js.map
