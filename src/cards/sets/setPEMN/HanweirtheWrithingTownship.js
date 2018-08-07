"use strict";
const Constants = require ("../../../Constants");
const HanweirtheWrithingTownshipBase = require("../setEMN/HanweirtheWrithingTownship");

class HanweirtheWrithingTownship extends HanweirtheWrithingTownshipBase {
  constructor (game) {
    super(game, "Hanweir, the Writhing Township", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = HanweirtheWrithingTownship;
