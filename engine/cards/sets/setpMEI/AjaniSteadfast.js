"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjaniSteadfastBase = require("../setM15/AjaniSteadfast.js");

class AjaniSteadfast extends AjaniSteadfastBase {
  constructor(game) {
    super(game, "Ajani Steadfast", "Media Inserts", "pMEI");
  }
}

module.exports = AjaniSteadfast;
