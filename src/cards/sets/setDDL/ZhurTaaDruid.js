"use strict";
const Constants = require ("../../../Constants");
const ZhurTaaDruidBase = require("../setC16/ZhurTaaDruid");

class ZhurTaaDruid extends ZhurTaaDruidBase {
  constructor (game) {
    super(game, "Zhur-Taa Druid", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ZhurTaaDruid;
