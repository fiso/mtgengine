"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrneryKudu extends UnimplementedCard {
  constructor (game) {
    super(game, "Ornery Kudu", "Amonkhet", "AKH");
  }
}

module.exports = OrneryKudu;
