"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kitesail extends Card {
  constructor(game) {
    super(game, "Kitesail", "Magic 2013", "M13");
  }
}

module.exports = Kitesail;
