"use strict";
const Constants = require ("../../../Constants");
const FirestormBase = require("../setWC98/Firestorm");

class Firestorm extends FirestormBase {
  constructor (game) {
    super(game, "Firestorm", "Weatherlight", "WTH");
  }
}

module.exports = Firestorm;
