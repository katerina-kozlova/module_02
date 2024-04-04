'use strict';

// Константы
const itemsLists = document.querySelectorAll('.item');
const itemsContainer = document.querySelector('.items');

const propsLists = document.getElementsByTagName('ol');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemFour = document.querySelectorAll('.props__item_four');
const contentContainer = document.querySelectorAll('.content');
const newProps = document.createElement('ol');


// Переместить item на свои места
itemsContainer.prepend(itemsLists[1]);
itemsLists[1].after(itemsLists[2]);
itemsLists[2].after(itemsLists[3]);

// Переместить пукнты props_item на свои места
propsItemFour[2].after(propsItemFour[5]);
propsItemTwo[7].after(propsItemTwo[8]);
propsItemTwo[8].after(propsItemTwo[9]);
propsLists[3].after(propsLists[5]);
contentContainer[4].append(newProps);
propsLists[6].append(propsLists[3]);