"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadbringerLampadsBase = require("../setC15/DreadbringerLampads.js");

class DreadbringerLampads extends DreadbringerLampadsBase {
  constructor(game) {
    super(game, "Dreadbringer Lampads", "Journey into Nyx", "JOU");
  }
}

module.exports = DreadbringerLampads;
