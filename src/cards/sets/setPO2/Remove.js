"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Remove extends UnimplementedCard {
  constructor (game) {
    super(game, "Remove", "Portal Second Age", "PO2");
  }
}

module.exports = Remove;
