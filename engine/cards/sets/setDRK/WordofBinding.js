"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WordofBindingBase = require("../set4ED/WordofBinding.js");

class WordofBinding extends WordofBindingBase {
  constructor(game) {
    super(game, "Word of Binding", "The Dark", "DRK");
  }
}

module.exports = WordofBinding;
