"use strict";
const Constants = require ("../../../Constants");
const MoggManiacBase = require("../setTPR/MoggManiac");

class MoggManiac extends MoggManiacBase {
  constructor (game) {
    super(game, "Mogg Maniac", "Stronghold", "STH");
  }
}

module.exports = MoggManiac;
