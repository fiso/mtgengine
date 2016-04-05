"use strict";
const Constants = require ("../../../Constants");
const WateryGraveBase = require("../setGTC/WateryGrave");

class WateryGrave extends WateryGraveBase {
  constructor(game) {
    super(game, "Watery Grave", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WateryGrave;
