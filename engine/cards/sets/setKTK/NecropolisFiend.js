"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecropolisFiendBase = require("../setCPK/NecropolisFiend.js");

class NecropolisFiend extends NecropolisFiendBase {
  constructor(game) {
    super(game, "Necropolis Fiend", "Khans of Tarkir", "KTK");
  }
}

module.exports = NecropolisFiend;
