"use strict";
const Constants = require ("../../../Constants");
const AeonChroniclerBase = require("../setDDM/AeonChronicler");

class AeonChronicler extends AeonChroniclerBase {
  constructor(game) {
    super(game, "Aeon Chronicler", "Planar Chaos", "PLC");
  }
}

module.exports = AeonChronicler;
