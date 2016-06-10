"use strict";
const Constants = require ("../../../Constants");
const VenomousBreathBase = require("../setICE/VenomousBreath");

class VenomousBreath extends VenomousBreathBase {
  constructor (game) {
    super(game, "Venomous Breath", "Mercadian Masques", "MMQ");
  }
}

module.exports = VenomousBreath;
