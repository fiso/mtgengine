"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrototypePortal extends Card {
  constructor(game) {
    super(game, "Prototype Portal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PrototypePortal;
