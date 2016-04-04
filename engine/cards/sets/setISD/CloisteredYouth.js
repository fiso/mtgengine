"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloisteredYouth extends Card {
  constructor(game) {
    super(game, "Cloistered Youth", "Innistrad", "ISD");
  }
}

module.exports = CloisteredYouth;
