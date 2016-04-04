"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wonder extends Card {
  constructor(game) {
    super(game, "Wonder", "Commander 2013 Edition", "C13");
  }
}

module.exports = Wonder;
