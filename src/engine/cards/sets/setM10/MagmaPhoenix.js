"use strict";
const Constants = require ("../../../Constants");
const MagmaPhoenixBase = require("../setM11/MagmaPhoenix");

class MagmaPhoenix extends MagmaPhoenixBase {
  constructor (game) {
    super(game, "Magma Phoenix", "Magic 2010", "M10");
  }
}

module.exports = MagmaPhoenix;
