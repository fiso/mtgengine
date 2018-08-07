"use strict";
const Constants = require ("../../../Constants");
const WastelandBase = require("../setEMA/Wasteland");

class Wasteland extends WastelandBase {
  constructor (game) {
    super(game, "Wasteland", "Tempest", "TMP");
  }
}

module.exports = Wasteland;
