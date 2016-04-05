"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DespoticScepter extends UnimplementedCard {
  constructor(game) {
    super(game, "Despotic Scepter", "Ice Age", "ICE");
  }
}

module.exports = DespoticScepter;
