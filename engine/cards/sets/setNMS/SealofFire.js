"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SealofFireBase = require("../setDIS/SealofFire.js");

class SealofFire extends SealofFireBase {
  constructor(game) {
    super(game, "Seal of Fire", "Nemesis", "NMS");
  }
}

module.exports = SealofFire;
