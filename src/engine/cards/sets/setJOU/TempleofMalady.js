"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofMalady extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple of Malady", "Journey into Nyx", "JOU");
  }
}

module.exports = TempleofMalady;
