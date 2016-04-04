"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VedalkenShacklesBase = require("../set5DN/VedalkenShackles.js");

class VedalkenShackles extends VedalkenShacklesBase {
  constructor(game) {
    super(game, "Vedalken Shackles", "Modern Masters", "MMA");
  }
}

module.exports = VedalkenShackles;
