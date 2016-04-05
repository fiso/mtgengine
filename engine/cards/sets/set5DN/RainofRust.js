"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofRust extends UnimplementedCard {
  constructor(game) {
    super(game, "Rain of Rust", "Fifth Dawn", "5DN");
  }
}

module.exports = RainofRust;
