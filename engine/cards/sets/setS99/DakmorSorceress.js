"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DakmorSorceressBase = require("../setPO2/DakmorSorceress.js");

class DakmorSorceress extends DakmorSorceressBase {
  constructor(game) {
    super(game, "Dakmor Sorceress", "Starter 1999", "S99");
  }
}

module.exports = DakmorSorceress;
