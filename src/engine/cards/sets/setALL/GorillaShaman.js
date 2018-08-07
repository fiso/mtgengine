"use strict";
const Constants = require ("../../../Constants");
const GorillaShamanBase = require("../setME2/GorillaShaman");

class GorillaShaman extends GorillaShamanBase {
  constructor (game) {
    super(game, "Gorilla Shaman", "Alliances", "ALL");
  }
}

module.exports = GorillaShaman;
