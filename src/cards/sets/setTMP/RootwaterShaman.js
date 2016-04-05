"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootwaterShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Rootwater Shaman", "Tempest", "TMP");
  }
}

module.exports = RootwaterShaman;
