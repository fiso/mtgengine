"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Probe extends Card {
  constructor(game) {
    super(game, "Probe", "Invasion", "INV");
  }
}

module.exports = Probe;
