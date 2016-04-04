"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Desolation extends Card {
  constructor(game) {
    super(game, "Desolation", "Visions", "VIS");
  }
}

module.exports = Desolation;
