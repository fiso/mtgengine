"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Banshee extends Card {
  constructor(game) {
    super(game, "Banshee", "Chronicles", "CHR");
  }
}

module.exports = Banshee;
