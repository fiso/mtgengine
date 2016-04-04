"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PainBase = require("../setDDH/Pain.js");

class Pain extends PainBase {
  constructor(game) {
    super(game, "Pain", "Invasion", "INV");
  }
}

module.exports = Pain;
