"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RatsFeast extends Card {
  constructor(game) {
    super(game, "Rats' Feast", "Judgment", "JUD");
  }
}

module.exports = RatsFeast;
