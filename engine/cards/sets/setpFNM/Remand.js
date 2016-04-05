"use strict";
const Constants = require ("../../../Constants");
const RemandBase = require("../setDDM/Remand");

class Remand extends RemandBase {
  constructor(game) {
    super(game, "Remand", "Friday Night Magic", "pFNM");
  }
}

module.exports = Remand;
