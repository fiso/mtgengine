"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreyalisesRadiance extends Card {
  constructor(game) {
    super(game, "Freyalise's Radiance", "Coldsnap", "CSP");
  }
}

module.exports = FreyalisesRadiance;
