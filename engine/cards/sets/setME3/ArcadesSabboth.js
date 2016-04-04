"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcadesSabbothBase = require("../setCHR/ArcadesSabboth.js");

class ArcadesSabboth extends ArcadesSabbothBase {
  constructor(game) {
    super(game, "Arcades Sabboth", "Masters Edition III", "ME3");
  }
}

module.exports = ArcadesSabboth;
