"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pallimud extends Card {
  constructor(game) {
    super(game, "Pallimud", "Tempest", "TMP");
  }
}

module.exports = Pallimud;
