"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Research extends Card {
  constructor(game) {
    super(game, "Research", "Dissension", "DIS");
  }
}

module.exports = Research;
