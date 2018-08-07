"use strict";
const Constants = require ("../../../Constants");
const BasandraBattleSeraphBase = require("../setCMA/BasandraBattleSeraph");

class BasandraBattleSeraph extends BasandraBattleSeraphBase {
  constructor (game) {
    super(game, "Basandra, Battle Seraph", "Conspiracy", "CNS");
  }
}

module.exports = BasandraBattleSeraph;
