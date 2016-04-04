"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EbonDragonBase = require("../setDRB/EbonDragon.js");

class EbonDragon extends EbonDragonBase {
  constructor(game) {
    super(game, "Ebon Dragon", "Masters Edition IV", "ME4");
  }
}

module.exports = EbonDragon;
