/**
 * Write your challenge solution here
 */
const accordionContent = document.querySelectorAll(".accordion-content");
const accordionItem = document.querySelectorAll(".accordion-item");
console.log(accordionItem);

accordionItem.forEach((item, index) => {
  let isopen = false;
  
  item.addEventListener("click", function () {

    accordionItem.forEach((_,idx) => {
        accordionContent[idx].style.maxHeight = "0";
    });

    if (isopen) {
      close();
    } else {
      open();
    }
    function open() {
      accordionContent[index].style.maxHeight = "100px";
      isopen = true;
    }
    function close() {
      accordionContent[index].style.maxHeight = "0";
      isopen = false;
    }
  });
});
