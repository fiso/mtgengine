"use strict";
const Constants = require ("../../../Constants");
const RespiteBase = require("../setCNS/Respite");

class Respite extends RespiteBase {
  constructor (game) {
    super(game, "Respite", "Tempest", "TMP");
  }
}

module.exports = Respite;
