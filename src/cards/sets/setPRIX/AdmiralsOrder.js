"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdmiralsOrder extends UnimplementedCard {
  constructor (game) {
    super(game, "Admiral's Order", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = AdmiralsOrder;
