"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScentofIvy extends Card {
  constructor(game) {
    super(game, "Scent of Ivy", "Urza's Destiny", "UDS");
  }
}

module.exports = ScentofIvy;
