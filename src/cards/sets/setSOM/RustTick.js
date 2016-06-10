"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustTick extends UnimplementedCard {
  constructor (game) {
    super(game, "Rust Tick", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RustTick;
