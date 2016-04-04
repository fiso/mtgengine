"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IgniteDisorder extends Card {
  constructor(game) {
    super(game, "Ignite Disorder", "Conflux", "CON");
  }
}

module.exports = IgniteDisorder;
