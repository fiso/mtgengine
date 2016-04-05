"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecroticOoze extends UnimplementedCard {
  constructor(game) {
    super(game, "Necrotic Ooze", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NecroticOoze;
