"use strict";
const Constants = require ("../../../Constants");
const MutavaultBase = require("../setM14/Mutavault");

class Mutavault extends MutavaultBase {
  constructor (game) {
    super(game, "Mutavault", "Magic Online Promos", "PRM");
  }
}

module.exports = Mutavault;
