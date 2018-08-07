"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeafarersQuay extends UnimplementedCard {
  constructor (game) {
    super(game, "Seafarer's Quay", "Legends", "LEG");
  }
}

module.exports = SeafarersQuay;
