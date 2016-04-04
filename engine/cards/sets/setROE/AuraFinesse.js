"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraFinesse extends Card {
  constructor(game) {
    super(game, "Aura Finesse", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AuraFinesse;
