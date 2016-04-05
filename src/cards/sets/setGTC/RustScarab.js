"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "Rust Scarab", "Gatecrash", "GTC");
  }
}

module.exports = RustScarab;
