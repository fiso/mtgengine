"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElephantAmbush extends Card {
  constructor(game) {
    super(game, "Elephant Ambush", "Odyssey", "ODY");
  }
}

module.exports = ElephantAmbush;
