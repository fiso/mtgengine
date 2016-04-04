"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KangeeAerieKeeper extends Card {
  constructor(game) {
    super(game, "Kangee, Aerie Keeper", "Invasion", "INV");
  }
}

module.exports = KangeeAerieKeeper;
