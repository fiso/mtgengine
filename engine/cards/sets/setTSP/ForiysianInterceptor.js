"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForiysianInterceptor extends UnimplementedCard {
  constructor(game) {
    super(game, "Foriysian Interceptor", "Time Spiral", "TSP");
  }
}

module.exports = ForiysianInterceptor;
