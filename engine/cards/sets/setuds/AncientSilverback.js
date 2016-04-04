"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientSilverbackBase = require("../setM15/AncientSilverback.js");

class AncientSilverback extends AncientSilverbackBase {
  constructor(game) {
    super(game, "Ancient Silverback", "Urza's Destiny", "UDS");
  }
}

module.exports = AncientSilverback;
