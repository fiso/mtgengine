"use strict";
const Constants = require ("../../../Constants");
const HinderBase = require("../setTD0/Hinder");

class Hinder extends HinderBase {
  constructor (game) {
    super(game, "Hinder", "Magic Player Rewards 2006", "P06");
  }
}

module.exports = Hinder;
