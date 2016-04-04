"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EssenceWardenBase = require("../setC14/EssenceWarden.js");

class EssenceWarden extends EssenceWardenBase {
  constructor(game) {
    super(game, "Essence Warden", "Planar Chaos", "PLC");
  }
}

module.exports = EssenceWarden;
