"use strict";
const Constants = require ("../../../Constants");
const FarmsteadBase = require("../setCED/Farmstead");

class Farmstead extends FarmsteadBase {
  constructor (game) {
    super(game, "Farmstead", "Limited Edition Beta", "LEB");
  }
}

module.exports = Farmstead;
