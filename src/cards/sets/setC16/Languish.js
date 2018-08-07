"use strict";
const Constants = require ("../../../Constants");
const LanguishBase = require("../setCM2/Languish");

class Languish extends LanguishBase {
  constructor (game) {
    super(game, "Languish", "Commander 2016", "C16");
  }
}

module.exports = Languish;
