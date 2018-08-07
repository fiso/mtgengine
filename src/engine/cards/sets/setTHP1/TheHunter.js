"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "The Hunter", "Theros Hero's Path", "THP1");
  }
}

module.exports = TheHunter;
