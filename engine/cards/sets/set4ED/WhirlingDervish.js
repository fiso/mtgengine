"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhirlingDervishBase = require("../set5ED/WhirlingDervish.js");

class WhirlingDervish extends WhirlingDervishBase {
  constructor(game) {
    super(game, "Whirling Dervish", "Fourth Edition", "4ED");
  }
}

module.exports = WhirlingDervish;
