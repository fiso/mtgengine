"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoraleBase = require("../set4ED/Morale.js");

class Morale extends MoraleBase {
  constructor(game) {
    super(game, "Morale", "The Dark", "DRK");
  }
}

module.exports = Morale;
