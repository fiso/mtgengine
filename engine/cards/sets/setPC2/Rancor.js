"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RancorBase = require("../setARC/Rancor.js");

class Rancor extends RancorBase {
  constructor(game) {
    super(game, "Rancor", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Rancor;
