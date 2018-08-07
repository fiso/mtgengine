"use strict";
const Constants = require ("../../../Constants");
const GeneralTazriBase = require("../setOGW/GeneralTazri");

class GeneralTazri extends GeneralTazriBase {
  constructor (game) {
    super(game, "General Tazri", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = GeneralTazri;
