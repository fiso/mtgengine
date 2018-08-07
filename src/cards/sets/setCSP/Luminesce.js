"use strict";
const Constants = require ("../../../Constants");
const LuminesceBase = require("../set10E/Luminesce");

class Luminesce extends LuminesceBase {
  constructor (game) {
    super(game, "Luminesce", "Coldsnap", "CSP");
  }
}

module.exports = Luminesce;
