"use strict";
const Constants = require ("../../../Constants");
const KezzerdrixBase = require("../setTMP/Kezzerdrix");

class Kezzerdrix extends KezzerdrixBase {
  constructor (game) {
    super(game, "Kezzerdrix", "Vintage Masters", "VMA");
  }
}

module.exports = Kezzerdrix;
