"use strict";
const Constants = require ("../../../Constants");
const ArcadesSabbothBase = require("../setCHR/ArcadesSabboth");

class ArcadesSabboth extends ArcadesSabbothBase {
  constructor (game) {
    super(game, "Arcades Sabboth", "Masters Edition III", "ME3");
  }
}

module.exports = ArcadesSabboth;
