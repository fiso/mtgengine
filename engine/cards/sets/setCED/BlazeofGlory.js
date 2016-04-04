"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazeofGlory extends Card {
  constructor(game) {
    super(game, "Blaze of Glory", "Collector's Edition", "CED");
  }
}

module.exports = BlazeofGlory;
