"use strict";
const Constants = require ("../../../Constants");
const GorillaShamanBase = require("../setALL/GorillaShaman");

class GorillaShaman extends GorillaShamanBase {
  constructor (game) {
    super(game, "Gorilla Shaman", "Masters Edition II", "ME2");
  }
}

module.exports = GorillaShaman;
