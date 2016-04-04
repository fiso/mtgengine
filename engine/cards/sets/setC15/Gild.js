"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GildBase = require("../setBNG/Gild.js");

class Gild extends GildBase {
  constructor(game) {
    super(game, "Gild", "Commander 2015", "C15");
  }
}

module.exports = Gild;
