"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Beast", "Odyssey", "ODY");
  }
}

module.exports = KrosanBeast;
