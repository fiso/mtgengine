"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManipulateFate extends Card {
  constructor(game) {
    super(game, "Manipulate Fate", "Invasion", "INV");
  }
}

module.exports = ManipulateFate;
