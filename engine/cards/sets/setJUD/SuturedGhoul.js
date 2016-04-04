"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuturedGhoul extends Card {
  constructor(game) {
    super(game, "Sutured Ghoul", "Judgment", "JUD");
  }
}

module.exports = SuturedGhoul;
