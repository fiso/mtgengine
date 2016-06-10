"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenFirebeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashen Firebeast", "Odyssey", "ODY");
  }
}

module.exports = AshenFirebeast;
