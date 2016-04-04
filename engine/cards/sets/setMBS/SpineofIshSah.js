"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpineofIshSahBase = require("../setC13/SpineofIshSah.js");

class SpineofIshSah extends SpineofIshSahBase {
  constructor(game) {
    super(game, "Spine of Ish Sah", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpineofIshSah;
