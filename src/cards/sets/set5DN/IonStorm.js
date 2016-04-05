"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IonStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Ion Storm", "Fifth Dawn", "5DN");
  }
}

module.exports = IonStorm;
