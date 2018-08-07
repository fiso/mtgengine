"use strict";
const Constants = require ("../../../Constants");
const SnapcasterMageBase = require("../setMM3/SnapcasterMage");

class SnapcasterMage extends SnapcasterMageBase {
  constructor (game) {
    super(game, "Snapcaster Mage", "Pro Tour Promos", "PPRO");
  }
}

module.exports = SnapcasterMage;
