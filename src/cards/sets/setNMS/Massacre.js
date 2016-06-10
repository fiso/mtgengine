"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Massacre extends UnimplementedCard {
  constructor (game) {
    super(game, "Massacre", "Nemesis", "NMS");
  }
}

module.exports = Massacre;
