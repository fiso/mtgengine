"use strict";
const Constants = require ("../../../Constants");
const VedalkenShacklesBase = require("../setMPS/VedalkenShackles");

class VedalkenShackles extends VedalkenShacklesBase {
  constructor (game) {
    super(game, "Vedalken Shackles", "Modern Masters", "MMA");
  }
}

module.exports = VedalkenShackles;
