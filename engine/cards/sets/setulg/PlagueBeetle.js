"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueBeetleBase = require("../set8ED/PlagueBeetle.js");

class PlagueBeetle extends PlagueBeetleBase {
  constructor(game) {
    super(game, "Plague Beetle", "Urza's Legacy", "ULG");
  }
}

module.exports = PlagueBeetle;
