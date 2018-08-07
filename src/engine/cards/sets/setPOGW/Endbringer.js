"use strict";
const Constants = require ("../../../Constants");
const EndbringerBase = require("../setOGW/Endbringer");

class Endbringer extends EndbringerBase {
  constructor (game) {
    super(game, "Endbringer", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = Endbringer;
