"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousnessBase = require("../setCED/Righteousness.js");

class Righteousness extends RighteousnessBase {
  constructor(game) {
    super(game, "Righteousness", "Fourth Edition", "4ED");
  }
}

module.exports = Righteousness;
