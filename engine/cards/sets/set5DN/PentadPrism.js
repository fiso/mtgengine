"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PentadPrism extends UnimplementedCard {
  constructor(game) {
    super(game, "Pentad Prism", "Fifth Dawn", "5DN");
  }
}

module.exports = PentadPrism;
