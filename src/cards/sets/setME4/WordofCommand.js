"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Word of Command", "Masters Edition IV", "ME4");
  }
}

module.exports = WordofCommand;
