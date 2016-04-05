"use strict";
const Constants = require ("../../../Constants");
const FiremaneAvengerBase = require("../setGTC/FiremaneAvenger");

class FiremaneAvenger extends FiremaneAvengerBase {
  constructor(game) {
    super(game, "Firemane Avenger", "Magic Game Day", "pMGD");
  }
}

module.exports = FiremaneAvenger;
