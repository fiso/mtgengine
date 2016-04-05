"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeliodsPilgrim extends UnimplementedCard {
  constructor(game) {
    super(game, "Heliod's Pilgrim", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HeliodsPilgrim;
