"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AwakeningZoneBase = require("../setCMD/AwakeningZone.js");

class AwakeningZone extends AwakeningZoneBase {
  constructor(game) {
    super(game, "Awakening Zone", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = AwakeningZone;
