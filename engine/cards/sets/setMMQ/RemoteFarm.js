"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemoteFarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Remote Farm", "Mercadian Masques", "MMQ");
  }
}

module.exports = RemoteFarm;
