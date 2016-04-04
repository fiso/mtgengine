"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousnessBase = require("../setCED/Righteousness.js");

class Righteousness extends RighteousnessBase {
  constructor(game) {
    super(game, "Righteousness", "Magic 2010", "M10");
  }
}

module.exports = Righteousness;
