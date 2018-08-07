"use strict";
const Constants = require ("../../../Constants");
const FireBellyChangelingBase = require("../setDDG/FireBellyChangeling");

class FireBellyChangeling extends FireBellyChangelingBase {
  constructor (game) {
    super(game, "Fire-Belly Changeling", "Lorwyn", "LRW");
  }
}

module.exports = FireBellyChangeling;
