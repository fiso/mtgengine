"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IceFloe extends Card {
  constructor(game) {
    super(game, "Ice Floe", "Fifth Edition", "5ED");
  }
}

module.exports = IceFloe;
