"use strict";
const Constants = require ("../../../Constants");
const MeddlingMageBase = require("../setARB/MeddlingMage");

class MeddlingMage extends MeddlingMageBase {
  constructor (game) {
    super(game, "Meddling Mage", "Magic Online Promos", "PRM");
  }
}

module.exports = MeddlingMage;
