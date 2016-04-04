"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShuGeneral extends Card {
  constructor(game) {
    super(game, "Shu General", "Masters Edition III", "ME3");
  }
}

module.exports = ShuGeneral;
