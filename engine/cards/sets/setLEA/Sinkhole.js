"use strict";
const Constants = require ("../../../Constants");
const SinkholeBase = require("../setCED/Sinkhole");

class Sinkhole extends SinkholeBase {
  constructor(game) {
    super(game, "Sinkhole", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Sinkhole;
