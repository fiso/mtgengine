"use strict";
const Constants = require ("../../../Constants");
const KongmingSleepingDragonBase = require("../setC13/KongmingSleepingDragon");

class KongmingSleepingDragon extends KongmingSleepingDragonBase {
  constructor (game) {
    super(game, "Kongming, \"Sleeping Dragon\"", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = KongmingSleepingDragon;
