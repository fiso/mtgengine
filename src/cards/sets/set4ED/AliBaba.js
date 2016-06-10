"use strict";
const Constants = require ("../../../Constants");
const AliBabaBase = require("../setARN/AliBaba");

class AliBaba extends AliBabaBase {
  constructor (game) {
    super(game, "Ali Baba", "Fourth Edition", "4ED");
  }
}

module.exports = AliBaba;
