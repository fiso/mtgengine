"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychotropeThallid extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychotrope Thallid", "Planar Chaos", "PLC");
  }
}

module.exports = PsychotropeThallid;
