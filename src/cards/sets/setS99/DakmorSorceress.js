"use strict";
const Constants = require ("../../../Constants");
const DakmorSorceressBase = require("../setPO2/DakmorSorceress");

class DakmorSorceress extends DakmorSorceressBase {
  constructor (game) {
    super(game, "Dakmor Sorceress", "Starter 1999", "S99");
  }
}

module.exports = DakmorSorceress;
