"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rebirth extends Card {
  constructor(game) {
    super(game, "Rebirth", "Fourth Edition", "4ED");
  }
}

module.exports = Rebirth;
