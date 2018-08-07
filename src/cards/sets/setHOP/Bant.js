"use strict";
const Constants = require ("../../../Constants");
const BantBase = require("../setPCA/Bant");

class Bant extends BantBase {
  constructor (game) {
    super(game, "Bant", "Planechase", "HOP");
  }
}

module.exports = Bant;
