"use strict";
const Constants = require ("../../../Constants");
const IbHalfheartGoblinTacticianBase = require("../setEVG/IbHalfheartGoblinTactician");

class IbHalfheartGoblinTactician extends IbHalfheartGoblinTacticianBase {
  constructor (game) {
    super(game, "Ib Halfheart, Goblin Tactician", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = IbHalfheartGoblinTactician;
