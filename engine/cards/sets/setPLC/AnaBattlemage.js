"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnaBattlemage extends Card {
  constructor(game) {
    super(game, "Ana Battlemage", "Planar Chaos", "PLC");
  }
}

module.exports = AnaBattlemage;
