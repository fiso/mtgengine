"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisruptivePitmage extends Card {
  constructor(game) {
    super(game, "Disruptive Pitmage", "Onslaught", "ONS");
  }
}

module.exports = DisruptivePitmage;
