"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmaPhoenixBase = require("../setM10/MagmaPhoenix.js");

class MagmaPhoenix extends MagmaPhoenixBase {
  constructor(game) {
    super(game, "Magma Phoenix", "Magic 2011", "M11");
  }
}

module.exports = MagmaPhoenix;
