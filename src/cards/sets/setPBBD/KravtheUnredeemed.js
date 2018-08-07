"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KravtheUnredeemed extends UnimplementedCard {
  constructor (game) {
    super(game, "Krav, the Unredeemed", "Battlebond Promos", "PBBD");
  }
}

module.exports = KravtheUnredeemed;
