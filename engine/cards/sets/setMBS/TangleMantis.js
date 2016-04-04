"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TangleMantis extends Card {
  constructor(game) {
    super(game, "Tangle Mantis", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TangleMantis;
