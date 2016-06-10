"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiousKitsune extends UnimplementedCard {
  constructor (game) {
    super(game, "Pious Kitsune", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PiousKitsune;
