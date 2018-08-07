"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecropolisRegent extends UnimplementedCard {
  constructor (game) {
    super(game, "Necropolis Regent", "Explorers of Ixalan", "E02");
  }
}

module.exports = NecropolisRegent;
