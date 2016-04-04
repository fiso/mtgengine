"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FuelfortheCause extends Card {
  constructor(game) {
    super(game, "Fuel for the Cause", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FuelfortheCause;
