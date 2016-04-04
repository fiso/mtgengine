"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BullAurochs extends Card {
  constructor(game) {
    super(game, "Bull Aurochs", "Coldsnap", "CSP");
  }
}

module.exports = BullAurochs;
