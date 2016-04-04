"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Myrsmith extends Card {
  constructor(game) {
    super(game, "Myrsmith", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Myrsmith;
