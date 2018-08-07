"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnaBattlemage extends UnimplementedCard {
  constructor (game) {
    super(game, "Ana Battlemage", "Planar Chaos", "PLC");
  }
}

module.exports = AnaBattlemage;
