"use strict";
const Constants = require ("../../../Constants");
const SinkholeBase = require("../setCED/Sinkhole");

class Sinkhole extends SinkholeBase {
  constructor (game) {
    super(game, "Sinkhole", "Unlimited Edition", "2ED");
  }
}

module.exports = Sinkhole;
