"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherSnapBase = require("../setC14/ÆtherSnap.js");

class ÆtherSnap extends ÆtherSnapBase {
  constructor(game) {
    super(game, "Æther Snap", "Darksteel", "DST");
  }
}

module.exports = ÆtherSnap;
