"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StingscourgerBase = require("../setMMA/Stingscourger.js");

class Stingscourger extends StingscourgerBase {
  constructor(game) {
    super(game, "Stingscourger", "Planar Chaos", "PLC");
  }
}

module.exports = Stingscourger;
