"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntotheCore extends UnimplementedCard {
  constructor (game) {
    super(game, "Into the Core", "Mirrodin Besieged", "MBS");
  }
}

module.exports = IntotheCore;
