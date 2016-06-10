"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrototypePortal extends UnimplementedCard {
  constructor (game) {
    super(game, "Prototype Portal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PrototypePortal;
