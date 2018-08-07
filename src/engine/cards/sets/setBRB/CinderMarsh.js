"use strict";
const Constants = require ("../../../Constants");
const CinderMarshBase = require("../setTPR/CinderMarsh");

class CinderMarsh extends CinderMarshBase {
  constructor (game) {
    super(game, "Cinder Marsh", "Battle Royale Box Set", "BRB");
  }
}

module.exports = CinderMarsh;
