"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GorillaShamanBase = require("../setALL/GorillaShaman.js");

class GorillaShaman extends GorillaShamanBase {
  constructor(game) {
    super(game, "Gorilla Shaman", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = GorillaShaman;
