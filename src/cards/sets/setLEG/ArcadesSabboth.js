"use strict";
const Constants = require ("../../../Constants");
const ArcadesSabbothBase = require("../setME3/ArcadesSabboth");

class ArcadesSabboth extends ArcadesSabbothBase {
  constructor (game) {
    super(game, "Arcades Sabboth", "Legends", "LEG");
  }
}

module.exports = ArcadesSabboth;
