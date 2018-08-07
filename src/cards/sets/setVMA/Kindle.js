"use strict";
const Constants = require ("../../../Constants");
const KindleBase = require("../setA25/Kindle");

class Kindle extends KindleBase {
  constructor (game) {
    super(game, "Kindle", "Vintage Masters", "VMA");
  }
}

module.exports = Kindle;
