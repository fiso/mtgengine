"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerumRaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Serum Raker", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SerumRaker;
