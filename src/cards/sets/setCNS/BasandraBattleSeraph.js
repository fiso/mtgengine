"use strict";
const Constants = require ("../../../Constants");
const BasandraBattleSeraphBase = require("../setCMD/BasandraBattleSeraph");

class BasandraBattleSeraph extends BasandraBattleSeraphBase {
  constructor (game) {
    super(game, "Basandra, Battle Seraph", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BasandraBattleSeraph;
