"use strict";
const Constants = require("./Constants");
const assert = require("assert");

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getCostTypeFromToken (token) {
  if (isNumeric(token)) {
    return Constants.costs.GENERIC;
  }

  assert(Constants.costTokens[token]);
  return Constants.costTokens[token];
}

function shuffle (array) {
  // https://github.com/coolaj86/knuth-shuffle

  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function replaceAll (string, search, replacement) {
    return string.split(search).join(replacement);  
}

function stripTags (string) {
  return string.replace(/<\/?[^>]+(>|$)/g, "");
}

module.exports = {
  isNumeric, getCostTypeFromToken, shuffle, replaceAll, stripTags
};
