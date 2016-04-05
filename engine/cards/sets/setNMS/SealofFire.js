"use strict";
const Constants = require ("../../../Constants");
const SealofFireBase = require("../setDIS/SealofFire");

class SealofFire extends SealofFireBase {
  constructor(game) {
    super(game, "Seal of Fire", "Nemesis", "NMS");
  }
}

module.exports = SealofFire;
