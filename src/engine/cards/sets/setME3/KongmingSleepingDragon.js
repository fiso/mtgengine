"use strict";
const Constants = require ("../../../Constants");
const KongmingSleepingDragonBase = require("../setA25/KongmingSleepingDragon");

class KongmingSleepingDragon extends KongmingSleepingDragonBase {
  constructor (game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Masters Edition III", "ME3");
  }
}

module.exports = KongmingSleepingDragon;
