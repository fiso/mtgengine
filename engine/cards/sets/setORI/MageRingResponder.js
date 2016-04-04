"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MageRingResponder extends Card {
  constructor(game) {
    super(game, "Mage-Ring Responder", "Magic Origins", "ORI");
  }
}

module.exports = MageRingResponder;
