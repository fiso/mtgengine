"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BullCerodon extends Card {
  constructor(game) {
    super(game, "Bull Cerodon", "Planechase", "HOP");
  }
}

module.exports = BullCerodon;
