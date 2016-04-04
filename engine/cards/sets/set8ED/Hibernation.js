"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hibernation extends Card {
  constructor(game) {
    super(game, "Hibernation", "Eighth Edition", "8ED");
  }
}

module.exports = Hibernation;
