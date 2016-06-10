"use strict";
const Constants = require ("../../../Constants");
const MoggFlunkiesBase = require("../setATH/MoggFlunkies");

class MoggFlunkies extends MoggFlunkiesBase {
  constructor (game) {
    super(game, "Mogg Flunkies", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggFlunkies;
