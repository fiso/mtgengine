"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntotheCore extends Card {
  constructor(game) {
    super(game, "Into the Core", "Mirrodin Besieged", "MBS");
  }
}

module.exports = IntotheCore;
