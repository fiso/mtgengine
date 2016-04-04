"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShieldBearerBase = require("../set5ED/ShieldBearer.js");

class ShieldBearer extends ShieldBearerBase {
  constructor(game) {
    super(game, "Shield Bearer", "Masters Edition II", "ME2");
  }
}

module.exports = ShieldBearer;
