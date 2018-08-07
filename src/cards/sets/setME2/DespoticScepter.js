"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DespoticScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Despotic Scepter", "Masters Edition II", "ME2");
  }
}

module.exports = DespoticScepter;
