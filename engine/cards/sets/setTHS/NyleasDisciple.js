"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyleasDisciple extends UnimplementedCard {
  constructor(game) {
    super(game, "Nylea's Disciple", "Theros", "THS");
  }
}

module.exports = NyleasDisciple;
