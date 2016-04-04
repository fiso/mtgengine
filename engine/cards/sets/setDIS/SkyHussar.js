"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyHussar extends Card {
  constructor(game) {
    super(game, "Sky Hussar", "Dissension", "DIS");
  }
}

module.exports = SkyHussar;
