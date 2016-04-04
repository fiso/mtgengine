"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnuffOutBase = require("../setDD3_GVL/SnuffOut.js");

class SnuffOut extends SnuffOutBase {
  constructor(game) {
    super(game, "Snuff Out", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = SnuffOut;
