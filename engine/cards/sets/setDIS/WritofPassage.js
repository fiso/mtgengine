"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WritofPassage extends Card {
  constructor(game) {
    super(game, "Writ of Passage", "Dissension", "DIS");
  }
}

module.exports = WritofPassage;
