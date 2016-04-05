"use strict";
const Constants = require ("../../../Constants");
const MagmaPhoenixBase = require("../setM10/MagmaPhoenix");

class MagmaPhoenix extends MagmaPhoenixBase {
  constructor(game) {
    super(game, "Magma Phoenix", "Magic 2011", "M11");
  }
}

module.exports = MagmaPhoenix;
