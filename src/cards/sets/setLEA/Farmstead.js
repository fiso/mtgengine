"use strict";
const Constants = require ("../../../Constants");
const FarmsteadBase = require("../setSUM/Farmstead");

class Farmstead extends FarmsteadBase {
  constructor (game) {
    super(game, "Farmstead", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Farmstead;
