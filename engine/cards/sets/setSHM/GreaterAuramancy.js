"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterAuramancy extends Card {
  constructor(game) {
    super(game, "Greater Auramancy", "Shadowmoor", "SHM");
  }
}

module.exports = GreaterAuramancy;
