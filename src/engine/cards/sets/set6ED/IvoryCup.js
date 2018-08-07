"use strict";
const Constants = require ("../../../Constants");
const IvoryCupBase = require("../set8ED/IvoryCup");

class IvoryCup extends IvoryCupBase {
  constructor (game) {
    super(game, "Ivory Cup", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IvoryCup;
