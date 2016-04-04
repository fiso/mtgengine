"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedforSpeed extends UnimplementedCard {
  constructor(game) {
    super(game, "Need for Speed", "Odyssey", "ODY");
  }
}

module.exports = NeedforSpeed;
