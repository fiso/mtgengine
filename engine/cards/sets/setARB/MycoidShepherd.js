"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MycoidShepherd extends Card {
  constructor(game) {
    super(game, "Mycoid Shepherd", "Alara Reborn", "ARB");
  }
}

module.exports = MycoidShepherd;
