"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeilbornGhoul extends Card {
  constructor(game) {
    super(game, "Veilborn Ghoul", "Magic 2013", "M13");
  }
}

module.exports = VeilbornGhoul;
