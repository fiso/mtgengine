"use strict";
const Constants = require ("../../../Constants");
const DeathlaceBase = require("../setCED/Deathlace");

class Deathlace extends DeathlaceBase {
  constructor(game) {
    super(game, "Deathlace", "Fourth Edition", "4ED");
  }
}

module.exports = Deathlace;
