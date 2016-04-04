"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArdentPlea extends Card {
  constructor(game) {
    super(game, "Ardent Plea", "Alara Reborn", "ARB");
  }
}

module.exports = ArdentPlea;
