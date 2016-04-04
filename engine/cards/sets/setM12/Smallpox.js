"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Smallpox extends Card {
  constructor(game) {
    super(game, "Smallpox", "Magic 2012", "M12");
  }
}

module.exports = Smallpox;
