"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisturbedBurial extends UnimplementedCard {
  constructor (game) {
    super(game, "Disturbed Burial", "Tempest", "TMP");
  }
}

module.exports = DisturbedBurial;
