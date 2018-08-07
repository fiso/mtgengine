"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesIngenuity extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Ingenuity", "Magic 2015", "M15");
  }
}

module.exports = JacesIngenuity;
