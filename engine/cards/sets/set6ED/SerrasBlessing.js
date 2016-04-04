"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerrasBlessing extends Card {
  constructor(game) {
    super(game, "Serra's Blessing", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SerrasBlessing;
