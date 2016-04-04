"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mobilization extends Card {
  constructor(game) {
    super(game, "Mobilization", "Commander 2014", "C14");
  }
}

module.exports = Mobilization;
