"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeddlingMageBase = require("../setARB/MeddlingMage.js");

class MeddlingMage extends MeddlingMageBase {
  constructor(game) {
    super(game, "Meddling Mage", "Planeshift", "PLS");
  }
}

module.exports = MeddlingMage;
