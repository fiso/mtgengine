"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolitionReins extends UnimplementedCard {
  constructor(game) {
    super(game, "Volition Reins", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VolitionReins;
