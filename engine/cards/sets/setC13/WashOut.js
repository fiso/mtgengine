"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WashOut extends Card {
  constructor(game) {
    super(game, "Wash Out", "Commander 2013 Edition", "C13");
  }
}

module.exports = WashOut;
