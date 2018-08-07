"use strict";
const Constants = require ("../../../Constants");
const HellkiteIgniterBase = require("../setC18/HellkiteIgniter");

class HellkiteIgniter extends HellkiteIgniterBase {
  constructor (game) {
    super(game, "Hellkite Igniter", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HellkiteIgniter;
