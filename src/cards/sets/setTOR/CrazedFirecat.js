"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrazedFirecat extends UnimplementedCard {
  constructor(game) {
    super(game, "Crazed Firecat", "Torment", "TOR");
  }
}

module.exports = CrazedFirecat;
