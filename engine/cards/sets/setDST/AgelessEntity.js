"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgelessEntity extends UnimplementedCard {
  constructor(game) {
    super(game, "Ageless Entity", "Darksteel", "DST");
  }
}

module.exports = AgelessEntity;
