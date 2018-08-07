"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortarpod extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortarpod", "Modern Masters 2015", "MM2");
  }
}

module.exports = Mortarpod;
