"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RancidRats extends Card {
  constructor(game) {
    super(game, "Rancid Rats", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RancidRats;
