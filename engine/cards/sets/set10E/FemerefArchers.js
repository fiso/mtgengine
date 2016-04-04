"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FemerefArchersBase = require("../set6ED/FemerefArchers.js");

class FemerefArchers extends FemerefArchersBase {
  constructor(game) {
    super(game, "Femeref Archers", "Tenth Edition", "10E");
  }
}

module.exports = FemerefArchers;
