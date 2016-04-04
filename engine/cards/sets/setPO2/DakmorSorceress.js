"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorSorceress extends Card {
  constructor(game) {
    super(game, "Dakmor Sorceress", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorSorceress;
