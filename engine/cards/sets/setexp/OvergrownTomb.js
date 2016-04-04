"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OvergrownTombBase = require("../setRAV/OvergrownTomb.js");

class OvergrownTomb extends OvergrownTombBase {
  constructor(game) {
    super(game, "Overgrown Tomb", "Zendikar Expedition", "EXP");
  }
}

module.exports = OvergrownTomb;
