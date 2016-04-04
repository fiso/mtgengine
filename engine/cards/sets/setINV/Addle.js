"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Addle extends Card {
  constructor(game) {
    super(game, "Addle", "Invasion", "INV");
  }
}

module.exports = Addle;
