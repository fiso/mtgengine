"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EchoMage extends Card {
  constructor(game) {
    super(game, "Echo Mage", "Commander 2013 Edition", "C13");
  }
}

module.exports = EchoMage;
