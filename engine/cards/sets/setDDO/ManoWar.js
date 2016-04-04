"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManoWarBase = require("../setpARL/ManoWar.js");

class ManoWar extends ManoWarBase {
  constructor(game) {
    super(game, "Man-o'-War", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ManoWar;
