"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlaveofBolas extends Card {
  constructor(game) {
    super(game, "Slave of Bolas", "Alara Reborn", "ARB");
  }
}

module.exports = SlaveofBolas;
