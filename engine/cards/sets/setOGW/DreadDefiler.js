"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadDefiler extends Card {
  constructor(game) {
    super(game, "Dread Defiler", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DreadDefiler;
