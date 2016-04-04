"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fall extends Card {
  constructor(game) {
    super(game, "Fall", "Dissension", "DIS");
  }
}

module.exports = Fall;
