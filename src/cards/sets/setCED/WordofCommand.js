"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofCommand extends UnimplementedCard {
  constructor(game) {
    super(game, "Word of Command", "Collector's Edition", "CED");
  }
}

module.exports = WordofCommand;
