"use strict";
const Constants = require ("../../../Constants");
const HornetCannonBase = require("../setDDE/HornetCannon");

class HornetCannon extends HornetCannonBase {
  constructor(game) {
    super(game, "Hornet Cannon", "Stronghold", "STH");
  }
}

module.exports = HornetCannon;
