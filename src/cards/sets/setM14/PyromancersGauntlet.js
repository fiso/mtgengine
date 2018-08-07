"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyromancersGauntlet extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyromancer's Gauntlet", "Magic 2014", "M14");
  }
}

module.exports = PyromancersGauntlet;
