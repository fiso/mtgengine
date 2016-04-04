"use strict";
const Constants = require ("../../../Constants");
const BlackLotusBase = require("../setCED/BlackLotus");

class BlackLotus extends BlackLotusBase {
  constructor(game) {
    super(game, "Black Lotus", "Unlimited Edition", "2ED");
  }
}

module.exports = BlackLotus;
