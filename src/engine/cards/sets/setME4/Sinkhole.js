"use strict";
const Constants = require ("../../../Constants");
const SinkholeBase = require("../setEMA/Sinkhole");

class Sinkhole extends SinkholeBase {
  constructor (game) {
    super(game, "Sinkhole", "Masters Edition IV", "ME4");
  }
}

module.exports = Sinkhole;
