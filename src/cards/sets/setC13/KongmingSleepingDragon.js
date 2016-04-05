"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KongmingSleepingDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Commander 2013 Edition", "C13");
  }
}

module.exports = KongmingSleepingDragon;
