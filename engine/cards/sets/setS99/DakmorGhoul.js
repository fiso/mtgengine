"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorGhoul extends Card {
  constructor(game) {
    super(game, "Dakmor Ghoul", "Starter 1999", "S99");
  }
}

module.exports = DakmorGhoul;
