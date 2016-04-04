"use strict";
const Constants = require ("../../../Constants");
const EarthlinkBase = require("../setICE/Earthlink");

class Earthlink extends EarthlinkBase {
  constructor(game) {
    super(game, "Earthlink", "Masters Edition II", "ME2");
  }
}

module.exports = Earthlink;
