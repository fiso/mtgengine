"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disperse extends Card {
  constructor(game) {
    super(game, "Disperse", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Disperse;
