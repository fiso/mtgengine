"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HissingQuagmire extends Card {
  constructor(game) {
    super(game, "Hissing Quagmire", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HissingQuagmire;
