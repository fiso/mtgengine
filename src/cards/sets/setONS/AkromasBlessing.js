"use strict";
const Constants = require ("../../../Constants");
const AkromasBlessingBase = require("../setVMA/AkromasBlessing");

class AkromasBlessing extends AkromasBlessingBase {
  constructor (game) {
    super(game, "Akroma's Blessing", "Onslaught", "ONS");
  }
}

module.exports = AkromasBlessing;
