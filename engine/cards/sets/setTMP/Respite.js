"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RespiteBase = require("../setCNS/Respite.js");

class Respite extends RespiteBase {
  constructor(game) {
    super(game, "Respite", "Tempest", "TMP");
  }
}

module.exports = Respite;
