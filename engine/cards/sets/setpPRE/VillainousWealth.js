"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VillainousWealthBase = require("../setKTK/VillainousWealth.js");

class VillainousWealth extends VillainousWealthBase {
  constructor(game) {
    super(game, "Villainous Wealth", "Prerelease Events", "pPRE");
  }
}

module.exports = VillainousWealth;
