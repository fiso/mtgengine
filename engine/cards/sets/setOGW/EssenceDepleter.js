"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceDepleter extends Card {
  constructor(game) {
    super(game, "Essence Depleter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EssenceDepleter;
