"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavenlyQilin extends UnimplementedCard {
  constructor (game) {
    super(game, "Heavenly Qilin", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = HeavenlyQilin;
