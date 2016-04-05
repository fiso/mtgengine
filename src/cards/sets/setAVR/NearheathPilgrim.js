"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NearheathPilgrim extends UnimplementedCard {
  constructor(game) {
    super(game, "Nearheath Pilgrim", "Avacyn Restored", "AVR");
  }
}

module.exports = NearheathPilgrim;
