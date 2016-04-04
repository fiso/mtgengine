"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LonelySandbarBase = require("../setC13/LonelySandbar.js");

class LonelySandbar extends LonelySandbarBase {
  constructor(game) {
    super(game, "Lonely Sandbar", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = LonelySandbar;
