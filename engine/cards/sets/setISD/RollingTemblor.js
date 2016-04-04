"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollingTemblor extends UnimplementedCard {
  constructor(game) {
    super(game, "Rolling Temblor", "Innistrad", "ISD");
  }
}

module.exports = RollingTemblor;
