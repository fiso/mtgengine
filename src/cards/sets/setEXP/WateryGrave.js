"use strict";
const Constants = require ("../../../Constants");
const WateryGraveBase = require("../setGTC/WateryGrave");

class WateryGrave extends WateryGraveBase {
  constructor (game) {
    super(game, "Watery Grave", "Zendikar Expedition", "EXP");
  }
}

module.exports = WateryGrave;
