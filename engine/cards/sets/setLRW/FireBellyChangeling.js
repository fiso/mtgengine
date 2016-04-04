"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireBellyChangelingBase = require("../setDDG/FireBellyChangeling.js");

class FireBellyChangeling extends FireBellyChangelingBase {
  constructor(game) {
    super(game, "Fire-Belly Changeling", "Lorwyn", "LRW");
  }
}

module.exports = FireBellyChangeling;
