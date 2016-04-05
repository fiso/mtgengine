"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aetherspouts extends UnimplementedCard {
  constructor(game) {
    super(game, "Ætherspouts", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Aetherspouts;
