"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Stand", "Nemesis", "NMS");
  }
}

module.exports = NobleStand;
