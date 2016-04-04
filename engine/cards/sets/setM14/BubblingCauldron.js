"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BubblingCauldron extends Card {
  constructor(game) {
    super(game, "Bubbling Cauldron", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BubblingCauldron;
