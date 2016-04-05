"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Topple extends UnimplementedCard {
  constructor(game) {
    super(game, "Topple", "Nemesis", "NMS");
  }
}

module.exports = Topple;
