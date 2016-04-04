"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Despoil extends Card {
  constructor(game) {
    super(game, "Despoil", "Prophecy", "PCY");
  }
}

module.exports = Despoil;
