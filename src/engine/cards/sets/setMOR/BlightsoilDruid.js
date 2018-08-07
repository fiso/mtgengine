"use strict";
const Constants = require ("../../../Constants");
const BlightsoilDruidBase = require("../setEMA/BlightsoilDruid");

class BlightsoilDruid extends BlightsoilDruidBase {
  constructor (game) {
    super(game, "Blightsoil Druid", "Morningtide", "MOR");
  }
}

module.exports = BlightsoilDruid;
