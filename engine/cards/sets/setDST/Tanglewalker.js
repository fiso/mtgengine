"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tanglewalker extends Card {
  constructor(game) {
    super(game, "Tanglewalker", "Darksteel", "DST");
  }
}

module.exports = Tanglewalker;
