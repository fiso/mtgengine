"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OjutaiInterceptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Ojutai Interceptor", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaiInterceptor;
