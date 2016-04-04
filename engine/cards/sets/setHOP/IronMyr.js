"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IronMyrBase = require("../setMRD/IronMyr.js");

class IronMyr extends IronMyrBase {
  constructor(game) {
    super(game, "Iron Myr", "Planechase", "HOP");
  }
}

module.exports = IronMyr;
