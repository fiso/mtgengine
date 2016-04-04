"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofPredicaments extends Card {
  constructor(game) {
    super(game, "Master of Predicaments", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MasterofPredicaments;
