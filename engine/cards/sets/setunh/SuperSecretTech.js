"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuperSecretTech extends Card {
  constructor(game) {
    super(game, "Super Secret Tech", "Unhinged", "UNH");
  }
}

module.exports = SuperSecretTech;
