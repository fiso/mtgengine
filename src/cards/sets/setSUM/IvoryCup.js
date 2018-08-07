"use strict";
const Constants = require ("../../../Constants");
const IvoryCupBase = require("../set8ED/IvoryCup");

class IvoryCup extends IvoryCupBase {
  constructor (game) {
    super(game, "Ivory Cup", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = IvoryCup;
