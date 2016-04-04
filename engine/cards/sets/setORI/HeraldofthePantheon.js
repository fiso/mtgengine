"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofthePantheon extends UnimplementedCard {
  constructor(game) {
    super(game, "Herald of the Pantheon", "Magic Origins", "ORI");
  }
}

module.exports = HeraldofthePantheon;
