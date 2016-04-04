"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychotropeThallid extends Card {
  constructor(game) {
    super(game, "Psychotrope Thallid", "Planar Chaos", "PLC");
  }
}

module.exports = PsychotropeThallid;
