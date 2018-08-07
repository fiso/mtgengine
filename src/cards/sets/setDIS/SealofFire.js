"use strict";
const Constants = require ("../../../Constants");
const SealofFireBase = require("../setJVC/SealofFire");

class SealofFire extends SealofFireBase {
  constructor (game) {
    super(game, "Seal of Fire", "Dissension", "DIS");
  }
}

module.exports = SealofFire;
