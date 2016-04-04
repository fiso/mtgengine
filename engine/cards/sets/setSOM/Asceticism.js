"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Asceticism extends UnimplementedCard {
  constructor(game) {
    super(game, "Asceticism", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Asceticism;
