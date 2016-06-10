"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpitefulBully extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiteful Bully", "Nemesis", "NMS");
  }
}

module.exports = SpitefulBully;
