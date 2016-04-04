"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ends extends Card {
  constructor(game) {
    super(game, "Ends", "Dissension", "DIS");
  }
}

module.exports = Ends;
