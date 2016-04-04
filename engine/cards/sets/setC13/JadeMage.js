"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JadeMage extends Card {
  constructor(game) {
    super(game, "Jade Mage", "Commander 2013 Edition", "C13");
  }
}

module.exports = JadeMage;
