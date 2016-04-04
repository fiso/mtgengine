"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningElementalBase = require("../setBRB/LightningElemental.js");

class LightningElemental extends LightningElementalBase {
  constructor(game) {
    super(game, "Lightning Elemental", "Eighth Edition", "8ED");
  }
}

module.exports = LightningElemental;
