"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DowsingShamanBase = require("../setPC2/DowsingShaman.js");

class DowsingShaman extends DowsingShamanBase {
  constructor(game) {
    super(game, "Dowsing Shaman", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DowsingShaman;
