"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CourtHomunculusBase = require("../setCON/CourtHomunculus.js");

class CourtHomunculus extends CourtHomunculusBase {
  constructor(game) {
    super(game, "Court Homunculus", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CourtHomunculus;
