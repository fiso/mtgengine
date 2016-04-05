"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientSilverback extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Silverback", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AncientSilverback;
