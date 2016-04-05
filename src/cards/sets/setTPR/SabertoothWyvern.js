"use strict";
const Constants = require ("../../../Constants");
const SabertoothWyvernBase = require("../setEXO/SabertoothWyvern");

class SabertoothWyvern extends SabertoothWyvernBase {
  constructor(game) {
    super(game, "Sabertooth Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = SabertoothWyvern;
