"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuguryAdept extends Card {
  constructor(game) {
    super(game, "Augury Adept", "Commander 2013 Edition", "C13");
  }
}

module.exports = AuguryAdept;
