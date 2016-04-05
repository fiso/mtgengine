"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnyxMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Onyx Mage", "Magic 2012", "M12");
  }
}

module.exports = OnyxMage;
