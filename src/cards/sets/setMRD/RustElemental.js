"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Rust Elemental", "Mirrodin", "MRD");
  }
}

module.exports = RustElemental;
