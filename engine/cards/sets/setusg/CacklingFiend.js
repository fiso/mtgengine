"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CacklingFiendBase = require("../setBRB/CacklingFiend.js");

class CacklingFiend extends CacklingFiendBase {
  constructor(game) {
    super(game, "Cackling Fiend", "Urza's Saga", "USG");
  }
}

module.exports = CacklingFiend;
