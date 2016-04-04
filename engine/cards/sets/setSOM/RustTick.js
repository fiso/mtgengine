"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RustTick extends Card {
  constructor(game) {
    super(game, "Rust Tick", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RustTick;
