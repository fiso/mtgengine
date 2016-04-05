"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rackling extends UnimplementedCard {
  constructor(game) {
    super(game, "Rackling", "Nemesis", "NMS");
  }
}

module.exports = Rackling;
