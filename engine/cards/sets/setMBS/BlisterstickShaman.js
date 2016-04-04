"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlisterstickShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Blisterstick Shaman", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BlisterstickShaman;
