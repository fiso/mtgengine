"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Countermand extends UnimplementedCard {
  constructor (game) {
    super(game, "Countermand", "Journey into Nyx", "JOU");
  }
}

module.exports = Countermand;
