"use strict";
const Constants = require ("../../../Constants");
const RansackBase = require("../setS99/Ransack");

class Ransack extends RansackBase {
  constructor (game) {
    super(game, "Ransack", "Stronghold", "STH");
  }
}

module.exports = Ransack;
