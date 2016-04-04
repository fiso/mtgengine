"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ApostlesBlessing extends Card {
  constructor(game) {
    super(game, "Apostle's Blessing", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ApostlesBlessing;
