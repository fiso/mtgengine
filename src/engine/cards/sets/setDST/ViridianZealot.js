"use strict";
const Constants = require ("../../../Constants");
const ViridianZealotBase = require("../setCMA/ViridianZealot");

class ViridianZealot extends ViridianZealotBase {
  constructor (game) {
    super(game, "Viridian Zealot", "Darksteel", "DST");
  }
}

module.exports = ViridianZealot;
