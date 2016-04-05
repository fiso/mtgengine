"use strict";
const Constants = require ("../../../Constants");
const WarthogBase = require("../set6ED/Warthog");

class Warthog extends WarthogBase {
  constructor(game) {
    super(game, "Warthog", "Visions", "VIS");
  }
}

module.exports = Warthog;
