"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EzurisArchers extends UnimplementedCard {
  constructor(game) {
    super(game, "Ezuri's Archers", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzurisArchers;
