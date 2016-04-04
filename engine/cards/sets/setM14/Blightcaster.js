"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blightcaster extends Card {
  constructor(game) {
    super(game, "Blightcaster", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Blightcaster;
