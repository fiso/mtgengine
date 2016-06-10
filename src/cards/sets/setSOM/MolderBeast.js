"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MolderBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Molder Beast", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MolderBeast;
