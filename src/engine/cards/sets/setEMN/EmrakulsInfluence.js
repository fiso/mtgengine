"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmrakulsInfluence extends UnimplementedCard {
  constructor (game) {
    super(game, "Emrakul's Influence", "Eldritch Moon", "EMN");
  }
}

module.exports = EmrakulsInfluence;
