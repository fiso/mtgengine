"use strict";
const Constants = require ("../../../Constants");
const PestermiteBase = require("../setMMA/Pestermite");

class Pestermite extends PestermiteBase {
  constructor (game) {
    super(game, "Pestermite", "Lorwyn", "LRW");
  }
}

module.exports = Pestermite;
