"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelRevivalBase = require("../setORI/CruelRevival.js");

class CruelRevival extends CruelRevivalBase {
  constructor(game) {
    super(game, "Cruel Revival", "Onslaught", "ONS");
  }
}

module.exports = CruelRevival;
