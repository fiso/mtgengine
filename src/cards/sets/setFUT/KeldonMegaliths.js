"use strict";
const Constants = require ("../../../Constants");
const KeldonMegalithsBase = require("../setJVC/KeldonMegaliths");

class KeldonMegaliths extends KeldonMegalithsBase {
  constructor (game) {
    super(game, "Keldon Megaliths", "Future Sight", "FUT");
  }
}

module.exports = KeldonMegaliths;
