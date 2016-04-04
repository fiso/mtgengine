"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaTitheBase = require("../setpMPR/ManaTithe.js");

class ManaTithe extends ManaTitheBase {
  constructor(game) {
    super(game, "Mana Tithe", "Planar Chaos", "PLC");
  }
}

module.exports = ManaTithe;
