"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeganticSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Megantic Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = MeganticSliver;
