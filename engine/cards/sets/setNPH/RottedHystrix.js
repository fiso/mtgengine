"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottedHystrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Rotted Hystrix", "New Phyrexia", "NPH");
  }
}

module.exports = RottedHystrix;
