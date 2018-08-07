"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraDisciple extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Disciple", "Dominaria", "DOM");
  }
}

module.exports = SerraDisciple;
