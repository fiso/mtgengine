"use strict";
const Constants = require ("../../../Constants");
const EndbringerBase = require("../setOGW/Endbringer");

class Endbringer extends EndbringerBase {
  constructor (game) {
    super(game, "Endbringer", "Magic Online Promos", "PRM");
  }
}

module.exports = Endbringer;
