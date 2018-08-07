"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuYanling extends UnimplementedCard {
  constructor (game) {
    super(game, "Mu Yanling", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = MuYanling;
