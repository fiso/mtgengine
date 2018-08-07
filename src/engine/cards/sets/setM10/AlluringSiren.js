"use strict";
const Constants = require ("../../../Constants");
const AlluringSirenBase = require("../setM12/AlluringSiren");

class AlluringSiren extends AlluringSirenBase {
  constructor (game) {
    super(game, "Alluring Siren", "Magic 2010", "M10");
  }
}

module.exports = AlluringSiren;
