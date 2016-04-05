"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recall extends UnimplementedCard {
  constructor(game) {
    super(game, "Recall", "Chronicles", "CHR");
  }
}

module.exports = Recall;
