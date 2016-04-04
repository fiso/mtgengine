"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HairStrungKoto extends Card {
  constructor(game) {
    super(game, "Hair-Strung Koto", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HairStrungKoto;
