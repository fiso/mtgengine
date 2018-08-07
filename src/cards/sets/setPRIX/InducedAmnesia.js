"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InducedAmnesia extends UnimplementedCard {
  constructor (game) {
    super(game, "Induced Amnesia", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = InducedAmnesia;
