"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodbornScoundrels extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodborn Scoundrels", "Battlebond", "BBD");
  }
}

module.exports = BloodbornScoundrels;
