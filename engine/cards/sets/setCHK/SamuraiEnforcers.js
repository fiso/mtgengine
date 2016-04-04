"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamuraiEnforcers extends Card {
  constructor(game) {
    super(game, "Samurai Enforcers", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SamuraiEnforcers;
