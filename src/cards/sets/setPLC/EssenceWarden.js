"use strict";
const Constants = require ("../../../Constants");
const EssenceWardenBase = require("../setC14/EssenceWarden");

class EssenceWarden extends EssenceWardenBase {
  constructor (game) {
    super(game, "Essence Warden", "Planar Chaos", "PLC");
  }
}

module.exports = EssenceWarden;
