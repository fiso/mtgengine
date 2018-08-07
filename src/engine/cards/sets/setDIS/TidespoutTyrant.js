"use strict";
const Constants = require ("../../../Constants");
const TidespoutTyrantBase = require("../setBBD/TidespoutTyrant");

class TidespoutTyrant extends TidespoutTyrantBase {
  constructor (game) {
    super(game, "Tidespout Tyrant", "Dissension", "DIS");
  }
}

module.exports = TidespoutTyrant;
