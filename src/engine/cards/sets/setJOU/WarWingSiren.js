"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarWingSiren extends UnimplementedCard {
  constructor (game) {
    super(game, "War-Wing Siren", "Journey into Nyx", "JOU");
  }
}

module.exports = WarWingSiren;
