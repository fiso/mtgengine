"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PouncingJaguarBase = require("../setpARL/PouncingJaguar.js");

class PouncingJaguar extends PouncingJaguarBase {
  constructor(game) {
    super(game, "Pouncing Jaguar", "Urza's Saga", "USG");
  }
}

module.exports = PouncingJaguar;
