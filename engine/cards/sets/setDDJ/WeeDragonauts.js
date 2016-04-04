"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeeDragonautsBase = require("../setpARL/WeeDragonauts.js");

class WeeDragonauts extends WeeDragonautsBase {
  constructor(game) {
    super(game, "Wee Dragonauts", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = WeeDragonauts;
