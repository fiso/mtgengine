"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NineRingedBo extends Card {
  constructor(game) {
    super(game, "Nine-Ringed Bo", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NineRingedBo;
