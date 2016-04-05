"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoCirclet extends UnimplementedCard {
  constructor(game) {
    super(game, "Echo Circlet", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EchoCirclet;
