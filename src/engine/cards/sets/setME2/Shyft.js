"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shyft extends UnimplementedCard {
  constructor (game) {
    super(game, "Shyft", "Masters Edition II", "ME2");
  }
}

module.exports = Shyft;
