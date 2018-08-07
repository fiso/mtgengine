"use strict";
const Constants = require ("../../../Constants");
const KongmingSleepingDragonBase = require("../setA25/KongmingSleepingDragon");

class KongmingSleepingDragon extends KongmingSleepingDragonBase {
  constructor (game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Magic Online Promos", "PRM");
  }
}

module.exports = KongmingSleepingDragon;
