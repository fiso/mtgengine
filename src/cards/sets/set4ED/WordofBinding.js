"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofBinding extends UnimplementedCard {
  constructor(game) {
    super(game, "Word of Binding", "Fourth Edition", "4ED");
  }
}

module.exports = WordofBinding;
