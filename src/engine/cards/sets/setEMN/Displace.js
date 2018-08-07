"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Displace extends UnimplementedCard {
  constructor (game) {
    super(game, "Displace", "Eldritch Moon", "EMN");
  }
}

module.exports = Displace;
