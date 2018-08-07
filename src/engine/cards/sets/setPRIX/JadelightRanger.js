"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadelightRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Jadelight Ranger", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = JadelightRanger;
