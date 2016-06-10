"use strict";
const Constants = require ("../../../Constants");
const SpireBarrageBase = require("../setDDI/SpireBarrage");

class SpireBarrage extends SpireBarrageBase {
  constructor (game) {
    super(game, "Spire Barrage", "Zendikar", "ZEN");
  }
}

module.exports = SpireBarrage;
