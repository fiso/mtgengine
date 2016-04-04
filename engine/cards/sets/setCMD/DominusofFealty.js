"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DominusofFealtyBase = require("../setEVE/DominusofFealty.js");

class DominusofFealty extends DominusofFealtyBase {
  constructor(game) {
    super(game, "Dominus of Fealty", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DominusofFealty;
