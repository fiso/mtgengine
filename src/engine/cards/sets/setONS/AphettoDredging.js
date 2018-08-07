"use strict";
const Constants = require ("../../../Constants");
const AphettoDredgingBase = require("../setH09/AphettoDredging");

class AphettoDredging extends AphettoDredgingBase {
  constructor (game) {
    super(game, "Aphetto Dredging", "Onslaught", "ONS");
  }
}

module.exports = AphettoDredging;
