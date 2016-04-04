"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScourgeofFleetsBase = require("../setDDO/ScourgeofFleets.js");

class ScourgeofFleets extends ScourgeofFleetsBase {
  constructor(game) {
    super(game, "Scourge of Fleets", "Prerelease Events", "pPRE");
  }
}

module.exports = ScourgeofFleets;
