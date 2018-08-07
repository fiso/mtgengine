"use strict";
const Constants = require ("../../../Constants");
const LanguishBase = require("../setCM2/Languish");

class Languish extends LanguishBase {
  constructor (game) {
    super(game, "Languish", "Magic Online Promos", "PRM");
  }
}

module.exports = Languish;
