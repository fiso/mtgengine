"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaccolithRig extends UnimplementedCard {
  constructor (game) {
    super(game, "Laccolith Rig", "Nemesis", "NEM");
  }
}

module.exports = LaccolithRig;
