"use strict";
const Constants = require ("../../../Constants");
const BlightcasterBase = require("../setM14/Blightcaster");

class Blightcaster extends BlightcasterBase {
  constructor(game) {
    super(game, "Blightcaster", "Magic Origins", "ORI");
  }
}

module.exports = Blightcaster;
