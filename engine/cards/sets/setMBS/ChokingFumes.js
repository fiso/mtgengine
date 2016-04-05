"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChokingFumes extends UnimplementedCard {
  constructor(game) {
    super(game, "Choking Fumes", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ChokingFumes;
