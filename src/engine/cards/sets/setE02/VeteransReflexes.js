"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteransReflexes extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran's Reflexes", "Explorers of Ixalan", "E02");
  }
}

module.exports = VeteransReflexes;
