"use strict";
const Constants = require ("../../../Constants");
const LifelinkBase = require("../setM12/Lifelink");

class Lifelink extends LifelinkBase {
  constructor (game) {
    super(game, "Lifelink", "Magic 2010", "M10");
  }
}

module.exports = Lifelink;
