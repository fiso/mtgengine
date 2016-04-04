"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OathofNissa extends Card {
  constructor(game) {
    super(game, "Oath of Nissa", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofNissa;
