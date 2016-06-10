"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Broker", "Odyssey", "ODY");
  }
}

module.exports = CephalidBroker;
