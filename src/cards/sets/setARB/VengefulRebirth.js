"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VengefulRebirth extends UnimplementedCard {
  constructor(game) {
    super(game, "Vengeful Rebirth", "Alara Reborn", "ARB");
  }
}

module.exports = VengefulRebirth;
