"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EzurisBrigade extends UnimplementedCard {
  constructor (game) {
    super(game, "Ezuri's Brigade", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzurisBrigade;
