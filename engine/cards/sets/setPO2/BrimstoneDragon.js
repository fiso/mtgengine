"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrimstoneDragonBase = require("../setME2/BrimstoneDragon.js");

class BrimstoneDragon extends BrimstoneDragonBase {
  constructor(game) {
    super(game, "Brimstone Dragon", "Portal Second Age", "PO2");
  }
}

module.exports = BrimstoneDragon;
