"use strict";
const Constants = require ("../../../Constants");
const FirestormPhoenixBase = require("../setLEG/FirestormPhoenix");

class FirestormPhoenix extends FirestormPhoenixBase {
  constructor (game) {
    super(game, "Firestorm Phoenix", "Masters Edition III", "ME3");
  }
}

module.exports = FirestormPhoenix;
