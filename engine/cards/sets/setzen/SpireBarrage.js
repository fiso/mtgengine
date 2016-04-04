"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpireBarrageBase = require("../setDDI/SpireBarrage.js");

class SpireBarrage extends SpireBarrageBase {
  constructor(game) {
    super(game, "Spire Barrage", "Zendikar", "ZEN");
  }
}

module.exports = SpireBarrage;
