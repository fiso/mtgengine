"use strict";
const Constants = require ("../../../Constants");
const KezzerdrixBase = require("../setTPR/Kezzerdrix");

class Kezzerdrix extends KezzerdrixBase {
  constructor (game) {
    super(game, "Kezzerdrix", "Tempest", "TMP");
  }
}

module.exports = Kezzerdrix;
