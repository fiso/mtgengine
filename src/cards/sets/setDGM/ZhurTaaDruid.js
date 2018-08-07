"use strict";
const Constants = require ("../../../Constants");
const ZhurTaaDruidBase = require("../setC16/ZhurTaaDruid");

class ZhurTaaDruid extends ZhurTaaDruidBase {
  constructor (game) {
    super(game, "Zhur-Taa Druid", "Dragon's Maze", "DGM");
  }
}

module.exports = ZhurTaaDruid;
