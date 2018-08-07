"use strict";
const Constants = require ("../../../Constants");
const WordofBindingBase = require("../set4ED/WordofBinding");

class WordofBinding extends WordofBindingBase {
  constructor (game) {
    super(game, "Word of Binding", "The Dark", "DRK");
  }
}

module.exports = WordofBinding;
