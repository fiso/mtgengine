"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HungryMistBase = require("../set5ED/HungryMist.js");

class HungryMist extends HungryMistBase {
  constructor(game) {
    super(game, "Hungry Mist", "Homelands", "HML");
  }
}

module.exports = HungryMist;
