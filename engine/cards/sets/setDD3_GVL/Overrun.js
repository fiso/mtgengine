"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverrunBase = require("../setATH/Overrun.js");

class Overrun extends OverrunBase {
  constructor(game) {
    super(game, "Overrun", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Overrun;
