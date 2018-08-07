"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Broker", "Iconic Masters", "IMA");
  }
}

module.exports = CephalidBroker;
