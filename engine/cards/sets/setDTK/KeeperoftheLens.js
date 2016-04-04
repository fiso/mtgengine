"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperoftheLens extends UnimplementedCard {
  constructor(game) {
    super(game, "Keeper of the Lens", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KeeperoftheLens;
