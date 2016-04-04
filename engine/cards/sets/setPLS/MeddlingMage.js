"use strict";
const Constants = require ("../../../Constants");
const MeddlingMageBase = require("../setARB/MeddlingMage");

class MeddlingMage extends MeddlingMageBase {
  constructor(game) {
    super(game, "Meddling Mage", "Planeshift", "PLS");
  }
}

module.exports = MeddlingMage;
