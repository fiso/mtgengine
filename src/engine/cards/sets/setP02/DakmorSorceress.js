"use strict";
const Constants = require ("../../../Constants");
const DakmorSorceressBase = require("../setS99/DakmorSorceress");

class DakmorSorceress extends DakmorSorceressBase {
  constructor (game) {
    super(game, "Dakmor Sorceress", "Portal Second Age", "P02");
  }
}

module.exports = DakmorSorceress;
