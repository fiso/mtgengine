"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IbHalfheartGoblinTacticianBase = require("../setDD3_EVG/IbHalfheartGoblinTactician.js");

class IbHalfheartGoblinTactician extends IbHalfheartGoblinTacticianBase {
  constructor(game) {
    super(game, "Ib Halfheart, Goblin Tactician", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = IbHalfheartGoblinTactician;
