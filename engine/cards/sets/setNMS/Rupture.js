"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rupture extends UnimplementedCard {
  constructor(game) {
    super(game, "Rupture", "Nemesis", "NMS");
  }
}

module.exports = Rupture;
