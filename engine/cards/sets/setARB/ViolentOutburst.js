"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViolentOutburst extends Card {
  constructor(game) {
    super(game, "Violent Outburst", "Alara Reborn", "ARB");
  }
}

module.exports = ViolentOutburst;
