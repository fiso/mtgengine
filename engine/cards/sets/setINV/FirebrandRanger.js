"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FirebrandRanger extends Card {
  constructor(game) {
    super(game, "Firebrand Ranger", "Invasion", "INV");
  }
}

module.exports = FirebrandRanger;
