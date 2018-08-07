"use strict";
const Constants = require ("../../../Constants");
const HungryMistBase = require("../setMED/HungryMist");

class HungryMist extends HungryMistBase {
  constructor (game) {
    super(game, "Hungry Mist", "Fifth Edition", "5ED");
  }
}

module.exports = HungryMist;
