"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndependentTroops extends Card {
  constructor(game) {
    super(game, "Independent Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = IndependentTroops;
