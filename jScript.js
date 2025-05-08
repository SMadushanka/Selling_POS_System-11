//get all nav
let dashboard_nav=document.getElementById("home-nav");
let customer_nav=document.getElementById("customer-nav");
let item_nav=document.getElementById("item-nav");
let order_nav=document.getElementById("order-nav");
let orderDetail_nav=document.getElementById("orderDetail-nav");

//get all section
let dashboard_section=document.getElementById("home-section");
let customer_section=document.getElementById("customer-section");
let item_section=document.getElementById("item-section");
let order_section=document.getElementById("order-section");
let orderDetail_section=document.getElementById("orderDetail-section");

// customer_section.style.display = "none";
// item_section.style.display = "none";
// order_section.style.display = "none";
// orderDetail_section.style.display = "none";
// dashboard_section.style.display = "block";

customer_nav.addEventListener('click',function (){
    //dashboar ekath ganna oni
    dashboard_section.style.display="none"
    customer_section.style.display="block"
    item_section.style.display="none"
    order_section.style.display="none"
    orderDetail_section.style.display = "none";
    //adala eka witharak block karanna oni
});

item_nav.addEventListener('click',function (){
    dashboard_section.style.display="none"
    customer_section.style.display="none"
    item_section.style.display="block"
    order_section.style.display="none"
    orderDetail_section.style.display = "none";
});

order_nav.addEventListener('click',function (){
    dashboard_section.style.display="none"
    customer_section.style.display="none"
    item_section.style.display="none"
    order_section.style.display="block"
    orderDetail_section.style.display = "none";
});

dashboard_nav.addEventListener('click',function (){
    dashboard_section.style.display="block"
    customer_section.style.display="none"
    item_section.style.display="none"
    order_section.style.display="none"
    orderDetail_section.style.display = "none";
});

orderDetail_nav.addEventListener('click',function (){
    dashboard_section.style.display="none"
    customer_section.style.display="none"
    item_section.style.display="none"
    order_section.style.display="none"
    orderDetail_section.style.display = "block";
});