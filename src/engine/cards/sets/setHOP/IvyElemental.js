"use strict";
const Constants = require ("../../../Constants");
const IvyElementalBase = require("../setIMA/IvyElemental");

class IvyElemental extends IvyElementalBase {
  constructor (game) {
    super(game, "Ivy Elemental", "Planechase", "HOP");
  }
}

module.exports = IvyElemental;
