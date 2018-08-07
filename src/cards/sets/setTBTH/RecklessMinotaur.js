"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessMinotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Minotaur", "Battle the Horde", "TBTH");
  }
}

module.exports = RecklessMinotaur;
