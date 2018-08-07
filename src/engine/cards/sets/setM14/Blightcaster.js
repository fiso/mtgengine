"use strict";
const Constants = require ("../../../Constants");
const BlightcasterBase = require("../setORI/Blightcaster");

class Blightcaster extends BlightcasterBase {
  constructor (game) {
    super(game, "Blightcaster", "Magic 2014", "M14");
  }
}

module.exports = Blightcaster;
