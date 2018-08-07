"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelfiePreservation extends UnimplementedCard {
  constructor (game) {
    super(game, "Selfie Preservation", "Unstable", "UST");
  }
}

module.exports = SelfiePreservation;
