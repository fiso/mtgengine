"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chandler extends Card {
  constructor(game) {
    super(game, "Chandler", "Homelands", "HML");
  }
}

module.exports = Chandler;
