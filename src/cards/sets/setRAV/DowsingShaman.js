"use strict";
const Constants = require ("../../../Constants");
const DowsingShamanBase = require("../setPCA/DowsingShaman");

class DowsingShaman extends DowsingShamanBase {
  constructor (game) {
    super(game, "Dowsing Shaman", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DowsingShaman;
