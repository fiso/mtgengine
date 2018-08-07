"use strict";
const Constants = require ("../../../Constants");
const HarmlessOfferingBase = require("../setEMN/HarmlessOffering");

class HarmlessOffering extends HarmlessOfferingBase {
  constructor (game) {
    super(game, "Harmless Offering", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = HarmlessOffering;
