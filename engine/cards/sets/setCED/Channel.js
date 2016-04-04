"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Channel extends Card {
  constructor(game) {
    super(game, "Channel", "Collector's Edition", "CED");
  }
}

module.exports = Channel;
