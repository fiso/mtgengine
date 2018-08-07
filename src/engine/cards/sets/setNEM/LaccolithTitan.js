"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaccolithTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Laccolith Titan", "Nemesis", "NEM");
  }
}

module.exports = LaccolithTitan;
