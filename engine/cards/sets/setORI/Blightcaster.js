"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlightcasterBase = require("../setM14/Blightcaster.js");

class Blightcaster extends BlightcasterBase {
  constructor(game) {
    super(game, "Blightcaster", "Magic Origins", "ORI");
  }
}

module.exports = Blightcaster;
