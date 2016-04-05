"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuelfortheCause extends UnimplementedCard {
  constructor(game) {
    super(game, "Fuel for the Cause", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FuelfortheCause;
