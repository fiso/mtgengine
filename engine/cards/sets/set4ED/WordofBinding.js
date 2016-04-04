"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordofBinding extends Card {
  constructor(game) {
    super(game, "Word of Binding", "Fourth Edition", "4ED");
  }
}

module.exports = WordofBinding;
