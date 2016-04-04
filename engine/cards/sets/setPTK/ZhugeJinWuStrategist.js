"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZhugeJinWuStrategist extends UnimplementedCard {
  constructor(game) {
    super(game, "Zhuge Jin, Wu Strategist", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZhugeJinWuStrategist;
