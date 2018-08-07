"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrenchMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrench Mind", "Iconic Masters", "IMA");
  }
}

module.exports = WrenchMind;
