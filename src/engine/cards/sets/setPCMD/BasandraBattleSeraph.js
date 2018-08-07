"use strict";
const Constants = require ("../../../Constants");
const BasandraBattleSeraphBase = require("../setCMA/BasandraBattleSeraph");

class BasandraBattleSeraph extends BasandraBattleSeraphBase {
  constructor (game) {
    super(game, "Basandra, Battle Seraph", "Commander 2011 Launch Party", "PCMD");
  }
}

module.exports = BasandraBattleSeraph;
