"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreedfromtheReal extends Card {
  constructor(game) {
    super(game, "Freed from the Real", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FreedfromtheReal;
