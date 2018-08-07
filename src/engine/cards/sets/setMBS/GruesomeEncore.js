"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruesomeEncore extends UnimplementedCard {
  constructor (game) {
    super(game, "Gruesome Encore", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GruesomeEncore;
