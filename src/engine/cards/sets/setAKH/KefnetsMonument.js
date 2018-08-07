"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KefnetsMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Kefnet's Monument", "Amonkhet", "AKH");
  }
}

module.exports = KefnetsMonument;
