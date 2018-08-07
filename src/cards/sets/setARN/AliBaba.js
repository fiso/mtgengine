"use strict";
const Constants = require ("../../../Constants");
const AliBabaBase = require("../set4ED/AliBaba");

class AliBaba extends AliBabaBase {
  constructor (game) {
    super(game, "Ali Baba", "Arabian Nights", "ARN");
  }
}

module.exports = AliBaba;
