"use strict";
const Constants = require ("../../../Constants");
const IbHalfheartGoblinTacticianBase = require("../setEVG/IbHalfheartGoblinTactician");

class IbHalfheartGoblinTactician extends IbHalfheartGoblinTacticianBase {
  constructor (game) {
    super(game, "Ib Halfheart, Goblin Tactician", "Time Spiral", "TSP");
  }
}

module.exports = IbHalfheartGoblinTactician;
