"use strict";
const Constants = require ("../../../Constants");
const IvyElementalBase = require("../setODY/IvyElemental");

class IvyElemental extends IvyElementalBase {
  constructor (game) {
    super(game, "Ivy Elemental", "Planechase", "HOP");
  }
}

module.exports = IvyElemental;
