"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OppressiveWill extends Card {
  constructor(game) {
    super(game, "Oppressive Will", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OppressiveWill;
