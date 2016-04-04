"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BasandraBattleSeraphBase = require("../setCMD/BasandraBattleSeraph.js");

class BasandraBattleSeraph extends BasandraBattleSeraphBase {
  constructor(game) {
    super(game, "Basandra, Battle Seraph", "Vintage Masters", "VMA");
  }
}

module.exports = BasandraBattleSeraph;
