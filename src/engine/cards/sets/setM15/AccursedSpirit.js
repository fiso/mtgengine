"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccursedSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Accursed Spirit", "Magic 2015", "M15");
  }
}

module.exports = AccursedSpirit;
