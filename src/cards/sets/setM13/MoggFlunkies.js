"use strict";
const Constants = require ("../../../Constants");
const MoggFlunkiesBase = require("../setATH/MoggFlunkies");

class MoggFlunkies extends MoggFlunkiesBase {
  constructor (game) {
    super(game, "Mogg Flunkies", "Magic 2013", "M13");
  }
}

module.exports = MoggFlunkies;
