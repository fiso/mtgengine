"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvacuationBase = require("../setDPA/Evacuation.js");

class Evacuation extends EvacuationBase {
  constructor(game) {
    super(game, "Evacuation", "Stronghold", "STH");
  }
}

module.exports = Evacuation;
