"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RancorBase = require("../setARC/Rancor.js");

class Rancor extends RancorBase {
  constructor(game) {
    super(game, "Rancor", "Magic 2013", "M13");
  }
}

module.exports = Rancor;
