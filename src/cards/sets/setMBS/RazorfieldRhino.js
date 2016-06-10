"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorfieldRhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Razorfield Rhino", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RazorfieldRhino;
