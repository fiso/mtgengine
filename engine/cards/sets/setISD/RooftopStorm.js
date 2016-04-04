"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RooftopStorm extends Card {
  constructor(game) {
    super(game, "Rooftop Storm", "Innistrad", "ISD");
  }
}

module.exports = RooftopStorm;
