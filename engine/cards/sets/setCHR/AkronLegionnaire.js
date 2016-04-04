"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AkronLegionnaire extends Card {
  constructor(game) {
    super(game, "Akron Legionnaire", "Chronicles", "CHR");
  }
}

module.exports = AkronLegionnaire;
