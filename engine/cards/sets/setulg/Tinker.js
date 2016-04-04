"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TinkerBase = require("../setV09/Tinker.js");

class Tinker extends TinkerBase {
  constructor(game) {
    super(game, "Tinker", "Urza's Legacy", "ULG");
  }
}

module.exports = Tinker;
