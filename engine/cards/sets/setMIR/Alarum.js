"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Alarum extends Card {
  constructor(game) {
    super(game, "Alarum", "Mirage", "MIR");
  }
}

module.exports = Alarum;
