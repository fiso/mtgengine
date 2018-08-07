"use strict";
const Constants = require ("../../../Constants");
const FirestormPhoenixBase = require("../setME3/FirestormPhoenix");

class FirestormPhoenix extends FirestormPhoenixBase {
  constructor (game) {
    super(game, "Firestorm Phoenix", "Legends", "LEG");
  }
}

module.exports = FirestormPhoenix;
