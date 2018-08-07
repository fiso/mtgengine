"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofthePraetors extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand of the Praetors", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HandofthePraetors;
