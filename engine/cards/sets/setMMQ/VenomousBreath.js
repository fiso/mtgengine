"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VenomousBreathBase = require("../setICE/VenomousBreath.js");

class VenomousBreath extends VenomousBreathBase {
  constructor(game) {
    super(game, "Venomous Breath", "Mercadian Masques", "MMQ");
  }
}

module.exports = VenomousBreath;
