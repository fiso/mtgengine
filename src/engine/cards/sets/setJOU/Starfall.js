"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Starfall extends UnimplementedCard {
  constructor (game) {
    super(game, "Starfall", "Journey into Nyx", "JOU");
  }
}

module.exports = Starfall;
