"use strict";
const Constants = require ("../../../Constants");
const VenomousBreathBase = require("../setMMQ/VenomousBreath");

class VenomousBreath extends VenomousBreathBase {
  constructor (game) {
    super(game, "Venomous Breath", "Ice Age", "ICE");
  }
}

module.exports = VenomousBreath;
