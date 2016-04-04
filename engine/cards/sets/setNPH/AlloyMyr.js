"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlloyMyrBase = require("../setMM2/AlloyMyr.js");

class AlloyMyr extends AlloyMyrBase {
  constructor(game) {
    super(game, "Alloy Myr", "New Phyrexia", "NPH");
  }
}

module.exports = AlloyMyr;
