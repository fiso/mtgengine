"use strict";
const Constants = require ("../../../Constants");
const MeddlingMageBase = require("../setARB/MeddlingMage");

class MeddlingMage extends MeddlingMageBase {
  constructor (game) {
    super(game, "Meddling Mage", "Judge Gift Cards 2006", "G06");
  }
}

module.exports = MeddlingMage;
