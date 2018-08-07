"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EverdawnChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Everdawn Champion", "Rivals of Ixalan", "RIX");
  }
}

module.exports = EverdawnChampion;
