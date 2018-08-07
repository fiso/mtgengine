"use strict";
const Constants = require ("../../../Constants");
const SinkholeBase = require("../setEMA/Sinkhole");

class Sinkhole extends SinkholeBase {
  constructor (game) {
    super(game, "Sinkhole", "Judge Gift Cards 2010", "G10");
  }
}

module.exports = Sinkhole;
