"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertsHold extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert's Hold", "Hour of Devastation", "HOU");
  }
}

module.exports = DesertsHold;
