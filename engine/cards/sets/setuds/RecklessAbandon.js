"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecklessAbandonBase = require("../setDDN/RecklessAbandon.js");

class RecklessAbandon extends RecklessAbandonBase {
  constructor(game) {
    super(game, "Reckless Abandon", "Urza's Destiny", "UDS");
  }
}

module.exports = RecklessAbandon;
