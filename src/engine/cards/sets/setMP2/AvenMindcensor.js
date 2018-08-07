"use strict";
const Constants = require ("../../../Constants");
const AvenMindcensorBase = require("../setAKH/AvenMindcensor");

class AvenMindcensor extends AvenMindcensorBase {
  constructor (game) {
    super(game, "Aven Mindcensor", "Amonkhet Invocations", "MP2");
  }
}

module.exports = AvenMindcensor;
