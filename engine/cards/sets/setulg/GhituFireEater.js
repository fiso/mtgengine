"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhituFireEaterBase = require("../set7ED/GhituFireEater.js");

class GhituFireEater extends GhituFireEaterBase {
  constructor(game) {
    super(game, "Ghitu Fire-Eater", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituFireEater;
