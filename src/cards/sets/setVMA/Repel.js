"use strict";
const Constants = require ("../../../Constants");
const RepelBase = require("../setODY/Repel");

class Repel extends RepelBase {
  constructor (game) {
    super(game, "Repel", "Vintage Masters", "VMA");
  }
}

module.exports = Repel;
