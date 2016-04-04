"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcadesSabbothBase = require("../setCHR/ArcadesSabboth.js");

class ArcadesSabboth extends ArcadesSabbothBase {
  constructor(game) {
    super(game, "Arcades Sabboth", "Legends", "LEG");
  }
}

module.exports = ArcadesSabboth;
