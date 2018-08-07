"use strict";
const Constants = require ("../../../Constants");
const EarthlinkBase = require("../setME2/Earthlink");

class Earthlink extends EarthlinkBase {
  constructor (game) {
    super(game, "Earthlink", "Ice Age", "ICE");
  }
}

module.exports = Earthlink;
