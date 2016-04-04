"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfectiousRage extends Card {
  constructor(game) {
    super(game, "Infectious Rage", "Judgment", "JUD");
  }
}

module.exports = InfectiousRage;
