"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KaerveksSpite extends Card {
  constructor(game) {
    super(game, "Kaervek's Spite", "Visions", "VIS");
  }
}

module.exports = KaerveksSpite;
