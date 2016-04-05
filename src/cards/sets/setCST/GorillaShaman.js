"use strict";
const Constants = require ("../../../Constants");
const GorillaShamanBase = require("../setALL/GorillaShaman");

class GorillaShaman extends GorillaShamanBase {
  constructor(game) {
    super(game, "Gorilla Shaman", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = GorillaShaman;
