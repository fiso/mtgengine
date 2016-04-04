"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RatsFeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Rats' Feast", "Judgment", "JUD");
  }
}

module.exports = RatsFeast;
