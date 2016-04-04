"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FiremaneAvengerBase = require("../setGTC/FiremaneAvenger.js");

class FiremaneAvenger extends FiremaneAvengerBase {
  constructor(game) {
    super(game, "Firemane Avenger", "Magic Game Day", "pMGD");
  }
}

module.exports = FiremaneAvenger;
