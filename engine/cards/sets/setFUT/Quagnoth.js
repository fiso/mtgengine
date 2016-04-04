"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Quagnoth extends Card {
  constructor(game) {
    super(game, "Quagnoth", "Future Sight", "FUT");
  }
}

module.exports = Quagnoth;
