"use strict";
const Constants = require ("../../../Constants");
const SinkholeBase = require("../setCED/Sinkhole");

class Sinkhole extends SinkholeBase {
  constructor (game) {
    super(game, "Sinkhole", "Eternal Masters", "EMA");
  }
}

module.exports = Sinkhole;
