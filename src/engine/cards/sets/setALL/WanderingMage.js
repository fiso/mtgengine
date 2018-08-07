"use strict";
const Constants = require ("../../../Constants");
const WanderingMageBase = require("../setME3/WanderingMage");

class WanderingMage extends WanderingMageBase {
  constructor (game) {
    super(game, "Wandering Mage", "Alliances", "ALL");
  }
}

module.exports = WanderingMage;
