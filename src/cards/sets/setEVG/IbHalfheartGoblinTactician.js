"use strict";
const Constants = require ("../../../Constants");
const IbHalfheartGoblinTacticianBase = require("../setDD3_EVG/IbHalfheartGoblinTactician");

class IbHalfheartGoblinTactician extends IbHalfheartGoblinTacticianBase {
  constructor (game) {
    super(game, "Ib Halfheart, Goblin Tactician", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = IbHalfheartGoblinTactician;
