"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientSpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Spider", "Planeshift", "PLS");
  }
}

module.exports = AncientSpider;
