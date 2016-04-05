"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleMantis extends UnimplementedCard {
  constructor(game) {
    super(game, "Tangle Mantis", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TangleMantis;
