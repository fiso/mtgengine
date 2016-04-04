"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shrivel extends Card {
  constructor(game) {
    super(game, "Shrivel", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Shrivel;
