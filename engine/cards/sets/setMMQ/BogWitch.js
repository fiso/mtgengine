"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogWitchBase = require("../setARC/BogWitch.js");

class BogWitch extends BogWitchBase {
  constructor(game) {
    super(game, "Bog Witch", "Mercadian Masques", "MMQ");
  }
}

module.exports = BogWitch;
