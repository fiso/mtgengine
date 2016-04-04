"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlunttheAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Blunt the Assault", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BlunttheAssault;
