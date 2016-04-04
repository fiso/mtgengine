"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZhurTaaDruidBase = require("../setDGM/ZhurTaaDruid.js");

class ZhurTaaDruid extends ZhurTaaDruidBase {
  constructor(game) {
    super(game, "Zhur-Taa Druid", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ZhurTaaDruid;
