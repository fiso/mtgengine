"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WanderingMageBase = require("../setALL/WanderingMage.js");

class WanderingMage extends WanderingMageBase {
  constructor(game) {
    super(game, "Wandering Mage", "Masters Edition III", "ME3");
  }
}

module.exports = WanderingMage;
