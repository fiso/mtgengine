"use strict";
const Constants = require ("../../../Constants");
const DeathlaceBase = require("../setCED/Deathlace");

class Deathlace extends DeathlaceBase {
  constructor(game) {
    super(game, "Deathlace", "Unlimited Edition", "2ED");
  }
}

module.exports = Deathlace;
