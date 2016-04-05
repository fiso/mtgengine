"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phyresis extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyresis", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Phyresis;
