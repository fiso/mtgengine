"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloneShell extends UnimplementedCard {
  constructor (game) {
    super(game, "Clone Shell", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CloneShell;
