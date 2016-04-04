"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RubyMedallion extends Card {
  constructor(game) {
    super(game, "Ruby Medallion", "Commander 2014", "C14");
  }
}

module.exports = RubyMedallion;
