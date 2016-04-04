"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReignofthePitBase = require("../setCNS/ReignofthePit.js");

class ReignofthePit extends ReignofthePitBase {
  constructor(game) {
    super(game, "Reign of the Pit", "Vintage Masters", "VMA");
  }
}

module.exports = ReignofthePit;
