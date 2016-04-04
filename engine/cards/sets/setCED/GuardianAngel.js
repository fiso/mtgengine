"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianAngel extends Card {
  constructor(game) {
    super(game, "Guardian Angel", "Collector's Edition", "CED");
  }
}

module.exports = GuardianAngel;
