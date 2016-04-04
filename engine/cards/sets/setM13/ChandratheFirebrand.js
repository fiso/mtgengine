"use strict";
const Constants = require ("../../../Constants");
const ChandratheFirebrandBase = require("../setM12/ChandratheFirebrand");

class ChandratheFirebrand extends ChandratheFirebrandBase {
  constructor(game) {
    super(game, "Chandra, the Firebrand", "Magic 2013", "M13");
  }
}

module.exports = ChandratheFirebrand;
