"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesErasure extends Card {
  constructor(game) {
    super(game, "Jace's Erasure", "Magic 2011", "M11");
  }
}

module.exports = JacesErasure;
