"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wasteland extends Card {
  constructor(game) {
    super(game, "Wasteland", "Judge Gift Program", "pJGP");
  }
}

module.exports = Wasteland;
