"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reknit extends Card {
  constructor(game) {
    super(game, "Reknit", "Shadowmoor", "SHM");
  }
}

module.exports = Reknit;
