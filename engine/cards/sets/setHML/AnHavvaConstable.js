"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnHavvaConstableBase = require("../set5ED/AnHavvaConstable.js");

class AnHavvaConstable extends AnHavvaConstableBase {
  constructor(game) {
    super(game, "An-Havva Constable", "Homelands", "HML");
  }
}

module.exports = AnHavvaConstable;
