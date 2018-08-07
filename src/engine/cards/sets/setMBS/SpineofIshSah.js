"use strict";
const Constants = require ("../../../Constants");
const SpineofIshSahBase = require("../setCM2/SpineofIshSah");

class SpineofIshSah extends SpineofIshSahBase {
  constructor (game) {
    super(game, "Spine of Ish Sah", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpineofIshSah;
