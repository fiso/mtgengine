"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Nantuko Elder", "Odyssey", "ODY");
  }
}

module.exports = NantukoElder;
