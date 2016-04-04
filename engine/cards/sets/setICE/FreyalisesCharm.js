"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreyalisesCharm extends Card {
  constructor(game) {
    super(game, "Freyalise's Charm", "Ice Age", "ICE");
  }
}

module.exports = FreyalisesCharm;
