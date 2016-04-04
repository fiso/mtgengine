"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildfieldBorderpost extends Card {
  constructor(game) {
    super(game, "Wildfield Borderpost", "Alara Reborn", "ARB");
  }
}

module.exports = WildfieldBorderpost;
