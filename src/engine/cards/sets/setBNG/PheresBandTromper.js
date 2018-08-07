"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PheresBandTromper extends UnimplementedCard {
  constructor (game) {
    super(game, "Pheres-Band Tromper", "Born of the Gods", "BNG");
  }
}

module.exports = PheresBandTromper;
