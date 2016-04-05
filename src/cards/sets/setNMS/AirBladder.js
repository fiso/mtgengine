"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirBladder extends UnimplementedCard {
  constructor(game) {
    super(game, "Air Bladder", "Nemesis", "NMS");
  }
}

module.exports = AirBladder;
