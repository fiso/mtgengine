"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VildinPackOutcast extends UnimplementedCard {
  constructor (game) {
    super(game, "Vildin-Pack Outcast", "Eldritch Moon", "EMN");
  }
}

module.exports = VildinPackOutcast;
