"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Didgeridoo extends Card {
  constructor(game) {
    super(game, "Didgeridoo", "Homelands", "HML");
  }
}

module.exports = Didgeridoo;
