"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crumble extends UnimplementedCard {
  constructor(game) {
    super(game, "Crumble", "Antiquities", "ATQ");
  }
}

module.exports = Crumble;
