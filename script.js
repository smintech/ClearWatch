document.addEventListener('DOMContentLoaded', () => {
    const selectWrapper = document.querySelector('.categorywrapper');
    const selectHeader = document.querySelector('.select-header');
    const categoryLabels = document.querySelectorAll('.category-label');

    selectHeader.addEventListener('click', () => {
        selectWrapper.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!selectWrapper.contains(event.target)) {
            selectWrapper.classList.remove('open');
        }
    });

    categoryLabels.forEach(label => {
        label.addEventListener('click', (event) => {
            event.stopPropagation();

            const parentGroup = label.closest('.category-group');
            parentGroup.classList.toggle('expanded');
        });
    });
    const options = document.querySelectorAll('.options-group li');
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            selectHeader.textContent = option.textContent;
            
            selectWrapper.classList.remove('open');
        });
    });
});
const reportBox = document.getElementById('report');
const charCount = document.getElementById('charcount');
const errorMsg = document.getElementById('error');
const submitBtn = document.getElementById('submitbtn');

reportBox.addEventListener('input', function () {
    const len = reportBox.value.length;
    
    charCount.textContent = `*${len} / 1000`;

    if (len >= 20) {
        errorMsg.style.display = 'none';
    }
});

submitBtn.addEventListener('click', function () {
    if (reportBox.value.length < 20) {
        errorMsg.style.display = 'none';
        alert("Enter Atleast 20 Texts");
    } else {
        errorMsg.style.display = 'none';
        alert("Report Submitted!");
        
        reportBox.value = "";
        charCount.textContent = "0 / 1000";
    }
});
