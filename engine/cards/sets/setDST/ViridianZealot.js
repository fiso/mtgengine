"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViridianZealotBase = require("../setC15/ViridianZealot.js");

class ViridianZealot extends ViridianZealotBase {
  constructor(game) {
    super(game, "Viridian Zealot", "Darksteel", "DST");
  }
}

module.exports = ViridianZealot;
