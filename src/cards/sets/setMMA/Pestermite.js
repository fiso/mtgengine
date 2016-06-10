"use strict";
const Constants = require ("../../../Constants");
const PestermiteBase = require("../setLRW/Pestermite");

class Pestermite extends PestermiteBase {
  constructor (game) {
    super(game, "Pestermite", "Modern Masters", "MMA");
  }
}

module.exports = Pestermite;
