"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FirestormPhoenixBase = require("../setLEG/FirestormPhoenix.js");

class FirestormPhoenix extends FirestormPhoenixBase {
  constructor(game) {
    super(game, "Firestorm Phoenix", "Masters Edition III", "ME3");
  }
}

module.exports = FirestormPhoenix;
