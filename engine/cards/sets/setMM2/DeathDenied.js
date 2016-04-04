"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathDeniedBase = require("../setMMA/DeathDenied.js");

class DeathDenied extends DeathDeniedBase {
  constructor(game) {
    super(game, "Death Denied", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DeathDenied;
