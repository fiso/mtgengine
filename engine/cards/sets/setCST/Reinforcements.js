"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReinforcementsBase = require("../setALL/Reinforcements.js");

class Reinforcements extends ReinforcementsBase {
  constructor(game) {
    super(game, "Reinforcements", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Reinforcements;
