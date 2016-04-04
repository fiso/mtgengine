"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardiansPledge extends Card {
  constructor(game) {
    super(game, "Guardians' Pledge", "Magic 2012", "M12");
  }
}

module.exports = GuardiansPledge;
