"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Woodripper extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodripper", "Nemesis", "NMS");
  }
}

module.exports = Woodripper;
