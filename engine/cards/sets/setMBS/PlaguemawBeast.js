"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlaguemawBeast extends Card {
  constructor(game) {
    super(game, "Plaguemaw Beast", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PlaguemawBeast;
