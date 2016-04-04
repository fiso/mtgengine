"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EbonyCharm extends Card {
  constructor(game) {
    super(game, "Ebony Charm", "Mirage", "MIR");
  }
}

module.exports = EbonyCharm;
