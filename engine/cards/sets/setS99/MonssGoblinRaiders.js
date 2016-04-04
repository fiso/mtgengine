"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MonssGoblinRaidersBase = require("../setCED/MonssGoblinRaiders.js");

class MonssGoblinRaiders extends MonssGoblinRaidersBase {
  constructor(game) {
    super(game, "Mons's Goblin Raiders", "Starter 1999", "S99");
  }
}

module.exports = MonssGoblinRaiders;
