"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ApostlesBlessingBase = require("../setMM2/ApostlesBlessing.js");

class ApostlesBlessing extends ApostlesBlessingBase {
  constructor(game) {
    super(game, "Apostle's Blessing", "New Phyrexia", "NPH");
  }
}

module.exports = ApostlesBlessing;
