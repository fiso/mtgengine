"use strict";
const Constants = require ("../../../Constants");
const SabertoothWyvernBase = require("../setTPR/SabertoothWyvern");

class SabertoothWyvern extends SabertoothWyvernBase {
  constructor (game) {
    super(game, "Sabertooth Wyvern", "Exodus", "EXO");
  }
}

module.exports = SabertoothWyvern;
