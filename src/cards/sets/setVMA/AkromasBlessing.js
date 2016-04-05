"use strict";
const Constants = require ("../../../Constants");
const AkromasBlessingBase = require("../setONS/AkromasBlessing");

class AkromasBlessing extends AkromasBlessingBase {
  constructor(game) {
    super(game, "Akroma's Blessing", "Vintage Masters", "VMA");
  }
}

module.exports = AkromasBlessing;
