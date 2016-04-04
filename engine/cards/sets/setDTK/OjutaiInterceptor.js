"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OjutaiInterceptor extends Card {
  constructor(game) {
    super(game, "Ojutai Interceptor", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaiInterceptor;
