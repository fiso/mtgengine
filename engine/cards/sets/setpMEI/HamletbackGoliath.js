"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HamletbackGoliathBase = require("../setC15/HamletbackGoliath.js");

class HamletbackGoliath extends HamletbackGoliathBase {
  constructor(game) {
    super(game, "Hamletback Goliath", "Media Inserts", "pMEI");
  }
}

module.exports = HamletbackGoliath;
