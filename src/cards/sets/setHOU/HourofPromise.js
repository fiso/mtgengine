"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofPromise extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Promise", "Hour of Devastation", "HOU");
  }
}

module.exports = HourofPromise;
