"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurGoreseeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Minotaur Goreseeker", "Battle the Horde", "TBTH");
  }
}

module.exports = MinotaurGoreseeker;
