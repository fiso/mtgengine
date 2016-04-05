"use strict";
const Constants = require ("../../../Constants");
const WanderingMageBase = require("../setALL/WanderingMage");

class WanderingMage extends WanderingMageBase {
  constructor(game) {
    super(game, "Wandering Mage", "Masters Edition III", "ME3");
  }
}

module.exports = WanderingMage;
