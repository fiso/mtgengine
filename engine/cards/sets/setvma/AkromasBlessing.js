"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkromasBlessingBase = require("../setONS/AkromasBlessing.js");

class AkromasBlessing extends AkromasBlessingBase {
  constructor(game) {
    super(game, "Akroma's Blessing", "Vintage Masters", "VMA");
  }
}

module.exports = AkromasBlessing;
