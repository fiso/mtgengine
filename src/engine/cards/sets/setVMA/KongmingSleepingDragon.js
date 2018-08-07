"use strict";
const Constants = require ("../../../Constants");
const KongmingSleepingDragonBase = require("../setA25/KongmingSleepingDragon");

class KongmingSleepingDragon extends KongmingSleepingDragonBase {
  constructor (game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Vintage Masters", "VMA");
  }
}

module.exports = KongmingSleepingDragon;
