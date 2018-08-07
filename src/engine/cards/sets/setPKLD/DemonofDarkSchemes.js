"use strict";
const Constants = require ("../../../Constants");
const DemonofDarkSchemesBase = require("../setKLD/DemonofDarkSchemes");

class DemonofDarkSchemes extends DemonofDarkSchemesBase {
  constructor (game) {
    super(game, "Demon of Dark Schemes", "Kaladesh Promos", "PKLD");
  }
}

module.exports = DemonofDarkSchemes;
