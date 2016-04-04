"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftofGranite extends Card {
  constructor(game) {
    super(game, "Gift of Granite", "Future Sight", "FUT");
  }
}

module.exports = GiftofGranite;
