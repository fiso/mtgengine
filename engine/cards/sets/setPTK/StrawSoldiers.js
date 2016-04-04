"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrawSoldiers extends Card {
  constructor(game) {
    super(game, "Straw Soldiers", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StrawSoldiers;
