"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvyElementalBase = require("../setODY/IvyElemental.js");

class IvyElemental extends IvyElementalBase {
  constructor(game) {
    super(game, "Ivy Elemental", "Planechase", "HOP");
  }
}

module.exports = IvyElemental;
