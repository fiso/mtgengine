"use strict";
const Constants = require ("../../../Constants");
const ChandratheFirebrandBase = require("../setM13/ChandratheFirebrand");

class ChandratheFirebrand extends ChandratheFirebrandBase {
  constructor (game) {
    super(game, "Chandra, the Firebrand", "Magic 2012", "M12");
  }
}

module.exports = ChandratheFirebrand;
