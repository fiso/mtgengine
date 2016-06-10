"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConstrictingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Constricting Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ConstrictingSliver;
