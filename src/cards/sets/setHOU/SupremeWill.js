"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupremeWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Supreme Will", "Hour of Devastation", "HOU");
  }
}

module.exports = SupremeWill;
