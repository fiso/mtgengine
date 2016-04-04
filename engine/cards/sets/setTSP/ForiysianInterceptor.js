"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForiysianInterceptor extends Card {
  constructor(game) {
    super(game, "Foriysian Interceptor", "Time Spiral", "TSP");
  }
}

module.exports = ForiysianInterceptor;
