"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RemoveSoul extends Card {
  constructor(game) {
    super(game, "Remove Soul", "Chronicles", "CHR");
  }
}

module.exports = RemoveSoul;
