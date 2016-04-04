"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeasideCitadel extends Card {
  constructor(game) {
    super(game, "Seaside Citadel", "Commander 2013 Edition", "C13");
  }
}

module.exports = SeasideCitadel;
