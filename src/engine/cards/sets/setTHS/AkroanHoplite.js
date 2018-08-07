"use strict";
const Constants = require ("../../../Constants");
const AkroanHopliteBase = require("../setCN2/AkroanHoplite");

class AkroanHoplite extends AkroanHopliteBase {
  constructor (game) {
    super(game, "Akroan Hoplite", "Theros", "THS");
  }
}

module.exports = AkroanHoplite;
