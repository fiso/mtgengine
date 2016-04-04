"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SliceinTwain extends Card {
  constructor(game) {
    super(game, "Slice in Twain", "Commander 2013 Edition", "C13");
  }
}

module.exports = SliceinTwain;
