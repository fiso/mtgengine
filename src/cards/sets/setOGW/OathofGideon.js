"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathofGideon extends UnimplementedCard {
  constructor(game) {
    super(game, "Oath of Gideon", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofGideon;
