"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurYounghorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Minotaur Younghorn", "Battle the Horde", "TBTH");
  }
}

module.exports = MinotaurYounghorn;
