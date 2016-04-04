"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PastinFlames extends Card {
  constructor(game) {
    super(game, "Past in Flames", "Innistrad", "ISD");
  }
}

module.exports = PastinFlames;
