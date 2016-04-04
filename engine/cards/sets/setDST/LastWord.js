"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastWord extends Card {
  constructor(game) {
    super(game, "Last Word", "Darksteel", "DST");
  }
}

module.exports = LastWord;
