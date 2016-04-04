"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnsnaringBridge extends Card {
  constructor(game) {
    super(game, "Ensnaring Bridge", "Eighth Edition", "8ED");
  }
}

module.exports = EnsnaringBridge;
