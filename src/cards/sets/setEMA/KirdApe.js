"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KirdApe extends UnimplementedCard {
  constructor (game) {
    super(game, "Kird Ape", "Eternal Masters", "EMA");
  }
}

module.exports = KirdApe;
