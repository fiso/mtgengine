"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakenumaBleeder extends UnimplementedCard {
  constructor (game) {
    super(game, "Takenuma Bleeder", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TakenumaBleeder;
