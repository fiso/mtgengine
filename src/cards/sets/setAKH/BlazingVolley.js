"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingVolley extends UnimplementedCard {
  constructor (game) {
    super(game, "Blazing Volley", "Amonkhet", "AKH");
  }
}

module.exports = BlazingVolley;
