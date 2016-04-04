"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KongmingSleepingDragonBase = require("../setC13/KongmingSleepingDragon.js");

class KongmingSleepingDragon extends KongmingSleepingDragonBase {
  constructor(game) {
    super(game, "Kongming, "Sleeping Dragon"", "Masters Edition III", "ME3");
  }
}

module.exports = KongmingSleepingDragon;
