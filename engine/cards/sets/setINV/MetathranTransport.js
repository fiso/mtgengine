"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetathranTransport extends Card {
  constructor(game) {
    super(game, "Metathran Transport", "Invasion", "INV");
  }
}

module.exports = MetathranTransport;
