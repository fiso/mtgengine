"use strict";
const Constants = require ("../../../Constants");
const NarwhalBase = require("../setHML/Narwhal");

class Narwhal extends NarwhalBase {
  constructor(game) {
    super(game, "Narwhal", "Masters Edition II", "ME2");
  }
}

module.exports = Narwhal;
