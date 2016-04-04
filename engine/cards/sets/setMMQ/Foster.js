"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FosterBase = require("../setC13/Foster.js");

class Foster extends FosterBase {
  constructor(game) {
    super(game, "Foster", "Mercadian Masques", "MMQ");
  }
}

module.exports = Foster;
