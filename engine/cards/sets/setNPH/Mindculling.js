"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindculling extends Card {
  constructor(game) {
    super(game, "Mindculling", "New Phyrexia", "NPH");
  }
}

module.exports = Mindculling;
