"use strict";
const Constants = require ("../../../Constants");
const KongmingSleepingDragonBase = require("../setA25/KongmingSleepingDragon");

class KongmingSleepingDragon extends KongmingSleepingDragonBase {
  constructor (game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = KongmingSleepingDragon;
