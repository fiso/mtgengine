"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Prowler", "Hour of Devastation", "HOU");
  }
}

module.exports = FeralProwler;
