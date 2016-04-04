"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadSlag extends Card {
  constructor(game) {
    super(game, "Dread Slag", "Dissension", "DIS");
  }
}

module.exports = DreadSlag;
