"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MonssGoblinRaidersBase = require("../setCED/MonssGoblinRaiders.js");

class MonssGoblinRaiders extends MonssGoblinRaidersBase {
  constructor(game) {
    super(game, "Mons's Goblin Raiders", "Fourth Edition", "4ED");
  }
}

module.exports = MonssGoblinRaiders;
