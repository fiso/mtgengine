"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessPangolin extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Pangolin", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = RecklessPangolin;
