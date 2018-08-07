"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowhengeSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Hollowhenge Spirit", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HollowhengeSpirit;
