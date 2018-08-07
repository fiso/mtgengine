"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KongmingSleepingDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Masters 25", "A25");
  }
}

module.exports = KongmingSleepingDragon;
