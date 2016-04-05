"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkAvian extends UnimplementedCard {
  constructor(game) {
    super(game, "Clockwork Avian", "Antiquities", "ATQ");
  }
}

module.exports = ClockworkAvian;
