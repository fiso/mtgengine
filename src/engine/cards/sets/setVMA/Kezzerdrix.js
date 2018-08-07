"use strict";
const Constants = require ("../../../Constants");
const KezzerdrixBase = require("../setTPR/Kezzerdrix");

class Kezzerdrix extends KezzerdrixBase {
  constructor (game) {
    super(game, "Kezzerdrix", "Vintage Masters", "VMA");
  }
}

module.exports = Kezzerdrix;
