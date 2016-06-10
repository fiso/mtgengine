"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Detonate extends UnimplementedCard {
  constructor (game) {
    super(game, "Detonate", "Antiquities", "ATQ");
  }
}

module.exports = Detonate;
