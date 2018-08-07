"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Teleportal extends UnimplementedCard {
  constructor (game) {
    super(game, "Teleportal", "Modern Masters 2017", "MM3");
  }
}

module.exports = Teleportal;
