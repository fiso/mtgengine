"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RathiFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Rathi Fiend", "Nemesis", "NMS");
  }
}

module.exports = RathiFiend;
