"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RathsEdge extends UnimplementedCard {
  constructor(game) {
    super(game, "Rath's Edge", "Nemesis", "NMS");
  }
}

module.exports = RathsEdge;
