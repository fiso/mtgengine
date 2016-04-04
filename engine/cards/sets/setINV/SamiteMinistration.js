"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamiteMinistration extends Card {
  constructor(game) {
    super(game, "Samite Ministration", "Invasion", "INV");
  }
}

module.exports = SamiteMinistration;
