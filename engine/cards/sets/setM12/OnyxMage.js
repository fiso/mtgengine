"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OnyxMage extends Card {
  constructor(game) {
    super(game, "Onyx Mage", "Magic 2012", "M12");
  }
}

module.exports = OnyxMage;
