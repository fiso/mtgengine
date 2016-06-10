"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PackHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Pack Hunt", "Nemesis", "NMS");
  }
}

module.exports = PackHunt;
