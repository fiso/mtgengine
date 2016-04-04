"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stand extends Card {
  constructor(game) {
    super(game, "Stand", "Invasion", "INV");
  }
}

module.exports = Stand;
