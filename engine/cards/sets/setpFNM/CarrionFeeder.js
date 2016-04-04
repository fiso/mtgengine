"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarrionFeederBase = require("../setDDE/CarrionFeeder.js");

class CarrionFeeder extends CarrionFeederBase {
  constructor(game) {
    super(game, "Carrion Feeder", "Friday Night Magic", "pFNM");
  }
}

module.exports = CarrionFeeder;
