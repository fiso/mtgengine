"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CapriciousEfreetBase = require("../setC13/CapriciousEfreet.js");

class CapriciousEfreet extends CapriciousEfreetBase {
  constructor(game) {
    super(game, "Capricious Efreet", "Magic 2010", "M10");
  }
}

module.exports = CapriciousEfreet;
