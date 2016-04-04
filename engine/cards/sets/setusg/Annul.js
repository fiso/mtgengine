"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnnulBase = require("../setMRD/Annul.js");

class Annul extends AnnulBase {
  constructor(game) {
    super(game, "Annul", "Urza's Saga", "USG");
  }
}

module.exports = Annul;
