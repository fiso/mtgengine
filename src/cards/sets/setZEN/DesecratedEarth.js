"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecratedEarth extends UnimplementedCard {
  constructor(game) {
    super(game, "Desecrated Earth", "Zendikar", "ZEN");
  }
}

module.exports = DesecratedEarth;
