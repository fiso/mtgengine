"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruesomeEncore extends Card {
  constructor(game) {
    super(game, "Gruesome Encore", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GruesomeEncore;
