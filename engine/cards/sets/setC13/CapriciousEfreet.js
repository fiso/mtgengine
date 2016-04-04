"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CapriciousEfreet extends Card {
  constructor(game) {
    super(game, "Capricious Efreet", "Commander 2013 Edition", "C13");
  }
}

module.exports = CapriciousEfreet;
