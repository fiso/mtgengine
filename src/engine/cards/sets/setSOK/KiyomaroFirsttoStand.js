"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiyomaroFirsttoStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiyomaro, First to Stand", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KiyomaroFirsttoStand;
