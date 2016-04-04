"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dispatch extends Card {
  constructor(game) {
    super(game, "Dispatch", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Dispatch;
