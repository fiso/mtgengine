"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofTorment extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald of Torment", "Born of the Gods", "BNG");
  }
}

module.exports = HeraldofTorment;
