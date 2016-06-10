"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidConstable extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Constable", "Judgment", "JUD");
  }
}

module.exports = CephalidConstable;
