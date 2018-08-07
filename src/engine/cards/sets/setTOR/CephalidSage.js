"use strict";
const Constants = require ("../../../Constants");
const CephalidSageBase = require("../setEMA/CephalidSage");

class CephalidSage extends CephalidSageBase {
  constructor (game) {
    super(game, "Cephalid Sage", "Torment", "TOR");
  }
}

module.exports = CephalidSage;
