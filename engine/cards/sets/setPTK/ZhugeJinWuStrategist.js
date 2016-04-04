"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZhugeJinWuStrategist extends Card {
  constructor(game) {
    super(game, "Zhuge Jin, Wu Strategist", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZhugeJinWuStrategist;
