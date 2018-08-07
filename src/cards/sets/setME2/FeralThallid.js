"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralThallid extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Thallid", "Masters Edition II", "ME2");
  }
}

module.exports = FeralThallid;
