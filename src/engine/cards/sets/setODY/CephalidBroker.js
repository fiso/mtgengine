"use strict";
const Constants = require ("../../../Constants");
const CephalidBrokerBase = require("../setIMA/CephalidBroker");

class CephalidBroker extends CephalidBrokerBase {
  constructor (game) {
    super(game, "Cephalid Broker", "Odyssey", "ODY");
  }
}

module.exports = CephalidBroker;
