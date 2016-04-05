"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blistergrub extends UnimplementedCard {
  constructor(game) {
    super(game, "Blistergrub", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Blistergrub;
