"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BleakCovenVampires extends UnimplementedCard {
  constructor (game) {
    super(game, "Bleak Coven Vampires", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BleakCovenVampires;
