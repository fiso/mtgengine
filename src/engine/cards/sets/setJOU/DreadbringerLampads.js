"use strict";
const Constants = require ("../../../Constants");
const DreadbringerLampadsBase = require("../setC15/DreadbringerLampads");

class DreadbringerLampads extends DreadbringerLampadsBase {
  constructor (game) {
    super(game, "Dreadbringer Lampads", "Journey into Nyx", "JOU");
  }
}

module.exports = DreadbringerLampads;
