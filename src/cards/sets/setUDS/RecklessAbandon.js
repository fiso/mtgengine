"use strict";
const Constants = require ("../../../Constants");
const RecklessAbandonBase = require("../setDDN/RecklessAbandon");

class RecklessAbandon extends RecklessAbandonBase {
  constructor(game) {
    super(game, "Reckless Abandon", "Urza's Destiny", "UDS");
  }
}

module.exports = RecklessAbandon;
