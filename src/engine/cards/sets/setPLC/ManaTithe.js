"use strict";
const Constants = require ("../../../Constants");
const ManaTitheBase = require("../setP08/ManaTithe");

class ManaTithe extends ManaTitheBase {
  constructor (game) {
    super(game, "Mana Tithe", "Planar Chaos", "PLC");
  }
}

module.exports = ManaTithe;
