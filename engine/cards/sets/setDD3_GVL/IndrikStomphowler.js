"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IndrikStomphowlerBase = require("../setC15/IndrikStomphowler.js");

class IndrikStomphowler extends IndrikStomphowlerBase {
  constructor(game) {
    super(game, "Indrik Stomphowler", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = IndrikStomphowler;
