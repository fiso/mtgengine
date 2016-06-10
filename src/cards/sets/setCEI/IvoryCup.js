"use strict";
const Constants = require ("../../../Constants");
const IvoryCupBase = require("../set6ED/IvoryCup");

class IvoryCup extends IvoryCupBase {
  constructor (game) {
    super(game, "Ivory Cup", "International Collector's Edition", "CEI");
  }
}

module.exports = IvoryCup;
