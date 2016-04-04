"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BartheDoor extends Card {
  constructor(game) {
    super(game, "Bar the Door", "Dark Ascension", "DKA");
  }
}

module.exports = BartheDoor;
