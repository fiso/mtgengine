"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildfireCerberus extends Card {
  constructor(game) {
    super(game, "Wildfire Cerberus", "Journey into Nyx", "JOU");
  }
}

module.exports = WildfireCerberus;
