"use strict";
const Constants = require ("../../../Constants");
const KeldonMegalithsBase = require("../setDD3_JVC/KeldonMegaliths");

class KeldonMegaliths extends KeldonMegalithsBase {
  constructor (game) {
    super(game, "Keldon Megaliths", "Future Sight", "FUT");
  }
}

module.exports = KeldonMegaliths;
