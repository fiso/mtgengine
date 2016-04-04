"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherVialBase = require("../setDST/ÆtherVial.js");

class ÆtherVial extends ÆtherVialBase {
  constructor(game) {
    super(game, "Æther Vial", "Modern Masters", "MMA");
  }
}

module.exports = ÆtherVial;
