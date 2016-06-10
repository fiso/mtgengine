"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeliriumSkeins extends UnimplementedCard {
  constructor (game) {
    super(game, "Delirium Skeins", "Dissension", "DIS");
  }
}

module.exports = DeliriumSkeins;
