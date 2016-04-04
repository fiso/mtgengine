"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RendingVolley extends UnimplementedCard {
  constructor(game) {
    super(game, "Rending Volley", "Dragons of Tarkir", "DTK");
  }
}

module.exports = RendingVolley;
