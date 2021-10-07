export const getValue = () => {
    let radioBtnValue = document.getElementsByName('radio');
    for (let i = 0; i < radioBtnValue.length; i++) {
        if (radioBtnValue[i].checked) {
            return radioBtnValue[i].value;
        }
    }
}