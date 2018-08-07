"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbuJafar extends UnimplementedCard {
  constructor (game) {
    super(game, "Abu Ja'far", "Magic Online Promos", "PRM");
  }
}

module.exports = AbuJafar;
