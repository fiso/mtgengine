"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mycologist extends UnimplementedCard {
  constructor (game) {
    super(game, "Mycologist", "Planar Chaos", "PLC");
  }
}

module.exports = Mycologist;
