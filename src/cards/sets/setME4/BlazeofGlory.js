"use strict";
const Constants = require ("../../../Constants");
const BlazeofGloryBase = require("../setCED/BlazeofGlory");

class BlazeofGlory extends BlazeofGloryBase {
  constructor(game) {
    super(game, "Blaze of Glory", "Masters Edition IV", "ME4");
  }
}

module.exports = BlazeofGlory;
