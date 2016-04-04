"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PutridImpBase = require("../setPD3/PutridImp.js");

class PutridImp extends PutridImpBase {
  constructor(game) {
    super(game, "Putrid Imp", "Torment", "TOR");
  }
}

module.exports = PutridImp;
