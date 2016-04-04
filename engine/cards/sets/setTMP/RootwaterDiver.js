"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootwaterDiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Rootwater Diver", "Tempest", "TMP");
  }
}

module.exports = RootwaterDiver;
