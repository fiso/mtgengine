"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReaperoftheWildsBase = require("../setCPK/ReaperoftheWilds.js");

class ReaperoftheWilds extends ReaperoftheWildsBase {
  constructor(game) {
    super(game, "Reaper of the Wilds", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ReaperoftheWilds;
