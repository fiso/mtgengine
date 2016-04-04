"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidBroker extends Card {
  constructor(game) {
    super(game, "Cephalid Broker", "Odyssey", "ODY");
  }
}

module.exports = CephalidBroker;
