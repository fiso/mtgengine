"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RancorBase = require("../setARC/Rancor.js");

class Rancor extends RancorBase {
  constructor(game) {
    super(game, "Rancor", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Rancor;
