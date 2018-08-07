"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JiangYanggu extends UnimplementedCard {
  constructor (game) {
    super(game, "Jiang Yanggu", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = JiangYanggu;
