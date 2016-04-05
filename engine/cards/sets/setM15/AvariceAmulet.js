"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvariceAmulet extends UnimplementedCard {
  constructor(game) {
    super(game, "Avarice Amulet", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AvariceAmulet;
