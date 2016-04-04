"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceBase = require("../setAPC/Ice.js");

class Ice extends IceBase {
  constructor(game) {
    super(game, "Ice", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Ice;
