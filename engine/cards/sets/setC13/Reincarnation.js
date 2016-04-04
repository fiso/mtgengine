"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reincarnation extends Card {
  constructor(game) {
    super(game, "Reincarnation", "Commander 2013 Edition", "C13");
  }
}

module.exports = Reincarnation;
